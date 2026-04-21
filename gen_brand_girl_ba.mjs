// Generate brand-girl before/after photos via Nano Banana Pro edit-image
// Reference: social-media/faceswap-test/brandgirlg-guahsa-cheek.png (blonde, green eyes, bathroom)
// Output: product-images/test-ba/{after,before}.png
import fs from "node:fs";
import { pipeline } from "node:stream/promises";
import sharp from "sharp";

const env = Object.fromEntries(
  fs.readFileSync(".env", "utf8").split("\n").filter(Boolean).map(l => l.split("="))
);
const KEY = env.WAVESPEED_API_KEY?.trim();
const ENDPOINT = "https://api.wavespeed.ai/api/v3/google/nano-banana-pro/edit";
const HEADERS = { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" };

const REF_PATH = "social-media/faceswap-test/brandgirlg-guahsa-cheek.png";
const OUT_DIR = "product-images/test-ba";
if (!fs.existsSync(OUT_DIR)) fs.mkdirSync(OUT_DIR, { recursive: true });

// Quality tail
const TAIL =
  "Shot on iPhone, natural morning light from window, soft diffused lighting, " +
  "editorial beauty photography, shallow depth of field, ultra-detailed skin texture, " +
  "fine grain, warm color grade with cream highlights, magazine-quality, no text, no watermark.";

// Identity anchor — describes the brand girl precisely so the model preserves her face across gens
const IDENTITY =
  "same exact woman: blonde hair pulled back naturally, green eyes, " +
  "early 20s, natural slim face, no makeup or minimal makeup, " +
  "approachable and relatable, the same person as shown in the reference image";

const AFTER_PROMPT = `
  Ultra-realistic editorial before/after photograph, AFTER state:
  ${IDENTITY}.
  She is standing in a clean bathroom, facing the camera head-on,
  no product in her hands, hands out of frame, just her face and shoulders visible.
  Skin is sculpted, depuffed, glowing — the post-gua-sha ritual result:
  defined cheekbones, sharp jawline, bright under-eyes, lifted brow, natural dewy glow.
  She looks calm, present, awake. Soft cream studio background slightly out of focus.
  Warm BY RITUEL color palette — cream (#F7F2EA), terracotta (#A15E3C), espresso accents.
  Absolutely no text, no arrows, no annotations, no product in frame.
  3:4 portrait aspect ratio, head and upper chest visible.
  ${TAIL}
`.trim().replace(/\s+/g, " ");

const BEFORE_PROMPT = `
  Edit the reference image to show the same woman in the SAME EXACT composition
  but with a dramatically bloated morning face.
  COMPOSITION MUST MATCH THE REFERENCE EXACTLY — do not change:
    - the background (same soft cream wall with window visible on the left, slightly out of focus)
    - the clothing (BARE SHOULDERS visible, no shirt, no top, no fabric — exactly as in the reference)
    - the hair (same slicked-back, flat against head, same color, same style as reference)
    - the head position, framing, and crop — identical to reference
    - the lighting direction (same soft natural window light from upper left as reference)
    - the head tilt, angle, and face orientation — identical to reference
    - the camera distance and zoom — identical to reference
  ONLY the skin state changes. Transform her from sculpted to BLOATED:
    - large puffy swollen under-eye bags with obvious dark shadows
    - clearly swollen puffy eyelids, half-hooded over the eyes
    - widened bloated cheeks from overnight water retention (face looks rounder, wider)
    - softened undefined jawline merging toward the neck with mild fluid-retention double chin
    - puffy slightly bloated lips
    - waxy dull pale skin with no glow and a tired morning sheen
    - droopy heavy brow, weary expression, mouth slightly parted in fatigue
    - the face looks visibly heavier and more tired than the reference — unmistakably bloated
  The viewer must be able to tell at a glance that this is the SAME PERSON,
  SAME SETTING, SAME OUTFIT, SAME HAIR as the reference — only the skin state is different.
  ${IDENTITY}.
  Absolutely no text, no arrows, no annotations, no product, no t-shirt, no visible clothing
  other than bare shoulders. Same 3:4 portrait aspect ratio as reference.
  ${TAIL}
`.trim().replace(/\s+/g, " ");

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function toDataUrl(path) {
  // Resize to max 1024px, output as jpeg for smaller payload
  const buf = await sharp(path)
    .resize({ width: 1024, height: 1024, fit: "inside", withoutEnlargement: true })
    .jpeg({ quality: 88 })
    .toBuffer();
  return `data:image/jpeg;base64,${buf.toString("base64")}`;
}

async function edit(name, prompt, refPath) {
  const out = `${OUT_DIR}/${name}.png`;
  if (fs.existsSync(out)) { console.log("SKIP", out); return out; }
  const imageData = await toDataUrl(refPath);
  console.log(`[${name}] ref resized, payload: ${Math.round(imageData.length / 1024)} KB`);
  const body = JSON.stringify({
    prompt,
    images: [imageData],
    size: "1024*1280",  // 4:5 portrait
    enable_sync_mode: false
  });
  console.log(`[${name}] POSTing (ref: ${refPath}) …`);
  const res = await fetch(ENDPOINT, { method: "POST", headers: HEADERS, body });
  if (!res.ok) { console.log("ERR", name, res.status, await res.text()); return null; }
  const { data } = await res.json();
  const id = data.id;
  console.log(`[${name}] queued → ${id}`);
  for (let i = 0; i < 160; i++) {
    await sleep(3000);
    const r = await fetch(`https://api.wavespeed.ai/api/v3/predictions/${id}/result`, { headers: HEADERS });
    const j = await r.json();
    const st = j.data.status;
    if (i % 5 === 0) console.log(`[${name}] status: ${st}`);
    if (st === "completed") {
      const url = j.data.outputs[0];
      const img = await fetch(url);
      await pipeline(img.body, fs.createWriteStream(out));
      console.log(`[${name}] OK → ${out}`);
      return out;
    }
    if (st === "failed") { console.log(`[${name}] FAIL`, j.data.error); return null; }
  }
  console.log(`[${name}] TIMEOUT`);
  return null;
}

(async () => {
  // Step 1: Generate AFTER using original brand girl ref
  const afterPath = await edit("after", AFTER_PROMPT, REF_PATH);
  if (!afterPath) { console.log("aborting: after failed"); process.exit(1); }

  // Step 2: Generate BEFORE using the AFTER as ref (composition lock)
  const beforePath = await edit("before", BEFORE_PROMPT, afterPath);
  if (!beforePath) { console.log("aborting: before failed"); process.exit(1); }

  console.log("\nDONE:");
  console.log("  AFTER  →", afterPath);
  console.log("  BEFORE →", beforePath);
})();
