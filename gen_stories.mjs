// Instagram Story photos (9:16 vertical) via WaveSpeed Nano Banana Pro
// Budget-conscious: 6 images per run, ~$0.25-0.35 total
import fs from "node:fs";
import { pipeline } from "node:stream/promises";

const env = Object.fromEntries(
  fs.readFileSync(".env", "utf8").split("\n").filter(Boolean).map(l => l.split("="))
);
const KEY = env.WAVESPEED_API_KEY?.trim();
const ENDPOINT = "https://api.wavespeed.ai/api/v3/google/nano-banana-pro/text-to-image";
const HEADERS = { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" };

// Same brand DNA as gen_images.mjs
const TAIL =
  "Shot on Hasselblad medium format, 85mm prime lens, shallow depth of field, " +
  "ultra-detailed textures, fine film grain, warm color grade with espresso shadows " +
  "and cream highlights, BY RITUEL eco-luxury editorial aesthetic, magazine-quality, " +
  "8K, no text, no watermark, no typography. Vertical 9:16 Instagram Story composition " +
  "with plenty of negative space in the upper third for story overlay text.";

const JOBS = [
  // ─── STORY 1 — Morning ritual vanity corner ───
  ["vanity",
    `Ultra-realistic editorial still life: a warm sunlit marble bathroom vanity corner, a polished amethyst gua sha stone resting diagonally on crumpled cream linen, a small amber glass rosehip oil dropper bottle standing beside it, dried eucalyptus sprig, golden morning window light streaming from the left casting long soft shadows, minimalist composition with negative space at the top of frame, no people, warm editorial mood`],

  // ─── STORY 2 — Gua sha macro hero ───
  ["guasha-close",
    `Ultra-realistic extreme macro of a polished natural amethyst gua sha stone resting on soft crumpled cream linen, violet crystal veining clearly visible, warm golden window light casting a long gentle shadow, museum-quality still life, stone placed in lower two thirds of frame with negative space above for text overlay`],

  // ─── STORY 3 — Rosehip oil drop (cinematic) ───
  ["oil-drop",
    `Ultra-realistic cinematic close-up of a single luminous golden rosehip oil drop suspended mid-air, frozen motion as it falls from a glass dropper pipette, soft cream background completely out of focus, side light illuminating the drop from the left, negative space around the drop, poetic and minimal`],

  // ─── STORY 4 — Full ritual flatlay (overhead) ───
  ["flatlay",
    `Ultra-realistic overhead vertical flatlay on warm cream linen: polished amethyst gua sha stone, amethyst facial roller with brushed gold hardware, small amber glass rosehip oil bottle, dried rose petals scattered, soft natural morning light, editorial magazine composition, plenty of empty linen space in the upper third for text`],

  // ─── STORY 5 — Terracotta pedestal product hero ───
  ["pedestal",
    `Ultra-realistic product photography vertical frame: a single polished amethyst gua sha stone resting on a small hand-thrown terracotta ceramic pedestal, crumpled cream linen backdrop, dried eucalyptus branch softly framing the right side, warm diffused window light from the upper left, long gentle shadow, luxury editorial feel, generous sky above for overlay text`],

  // ─── STORY 6 — Abstract linen + light (overlay-ready) ───
  ["linen-light",
    `Ultra-realistic warm sunlit cream linen fabric draped softly, gentle folds catching golden morning light, a terracotta ceramic saucer partially visible in the lower third holding a single dried rose petal, abstract minimal editorial background, dreamy mood, lots of empty negative space for story overlay text, NO people, NO products in focus`],
];

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function generate(name, prompt) {
  const out = `product-images/story-${name}.png`;
  if (fs.existsSync(out)) { console.log("SKIP", out); return; }
  const fullPrompt = `${prompt}. ${TAIL}`;
  // 1152*2048 = 9:16 vertical — perfect for Instagram Story (native 1080x1920)
  const body = JSON.stringify({
    prompt: fullPrompt,
    size: "1152*2048",
    enable_sync_mode: false
  });
  const res = await fetch(ENDPOINT, { method: "POST", headers: HEADERS, body });
  if (!res.ok) { console.log("ERR", name, res.status, await res.text()); return; }
  const { data } = await res.json();
  const id = data.id;
  for (let i = 0; i < 80; i++) {
    await sleep(3000);
    const r = await fetch(`https://api.wavespeed.ai/api/v3/predictions/${id}/result`, { headers: HEADERS });
    const j = await r.json();
    const st = j.data.status;
    if (st === "completed") {
      const url = j.data.outputs[0];
      const img = await fetch(url);
      await pipeline(img.body, fs.createWriteStream(out));
      console.log("OK  ", out);
      return;
    }
    if (st === "failed") { console.log("FAIL", name, j.data.error); return; }
  }
  console.log("TIMEOUT", name);
}

const only = process.argv[2];
for (const [name, prompt] of JOBS) {
  if (only && !name.includes(only)) continue;
  try { await generate(name, prompt); }
  catch (e) { console.log("EXC", name, e.message); }
}
