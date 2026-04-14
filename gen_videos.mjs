// Image-to-video via WaveSpeed Wan 2.2 i2v-720p
// Takes committed story images and animates them into 5-second vertical clips
// for Instagram Reels / TikTok. Budget: ~$0.15-0.30 per clip, 6 clips = ~$1-2.
import fs from "node:fs";
import { pipeline } from "node:stream/promises";

const env = Object.fromEntries(
  fs.readFileSync(".env", "utf8").split("\n").filter(Boolean).map(l => l.split("="))
);
const KEY = env.WAVESPEED_API_KEY?.trim();

// Wan 2.2 i2v 720p endpoint on WaveSpeed
const ENDPOINT = "https://api.wavespeed.ai/api/v3/wavespeed-ai/wan-2.2/i2v-720p";
const HEADERS = { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" };

// Source images are already committed — use raw github (instant, no CDN cache lag)
const IMG_BASE = "https://raw.githubusercontent.com/AppaaThe/Rituel-store/main/product-images/";

const BRAND_TAIL =
  ". BY RITUEL editorial beauty campaign motion, warm cream and terracotta color palette, " +
  "slow cinematic movement, soft warm lighting, no people, no text, no sudden cuts";

const JOBS = [
  ["vanity", "story-vanity.png",
    "slow subtle camera push-in from left to right across the sunlit marble vanity, delicate shadows drifting slowly, warm morning window light shifting, still-life cinematic motion"],

  ["guasha-close", "story-guasha-close.png",
    "extreme slow zoom in on the polished amethyst gua sha stone, light flare slowly sweeping across the violet crystal veining, dust particles catching the warm window light, cinematic product reveal"],

  ["oil-drop", "story-oil-drop.png",
    "the single luminous golden rosehip oil drop slowly continues falling in slow-motion and gently lands on the cream surface creating a soft ripple, cinematic macro motion"],

  ["flatlay", "story-flatlay.png",
    "slow overhead pan drifting from left to right across the editorial flatlay, linen folds softly shifting with a gentle breeze, rose petals barely trembling, cinematic product reveal"],

  ["pedestal", "story-pedestal.png",
    "slow gentle orbital camera movement around the terracotta pedestal and amethyst stone, warm light rotating with the camera, eucalyptus branch trembling slightly, luxury product hero motion"],

  ["linen-light", "story-linen-light.png",
    "soft breeze slowly moving the cream linen fabric in gentle waves, warm golden sunlight rays drifting slowly across the frame, dreamy cinematic atmosphere"],
];

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function generate(name, sourceImg, prompt) {
  const out = `product-images/vid-${name}.mp4`;
  if (fs.existsSync(out)) { console.log("SKIP", out); return; }

  const body = JSON.stringify({
    image: IMG_BASE + sourceImg,
    prompt: prompt + BRAND_TAIL,
    duration: 5,
    enable_sync_mode: false,
  });

  const res = await fetch(ENDPOINT, { method: "POST", headers: HEADERS, body });
  if (!res.ok) {
    console.log("ERR", name, res.status, await res.text());
    return;
  }
  const { data } = await res.json();
  const id = data.id;
  console.log("SUBMITTED", name, "→", id);

  // Poll for result (video gen takes 30-90s)
  for (let i = 0; i < 80; i++) {
    await sleep(5000);
    const r = await fetch(`https://api.wavespeed.ai/api/v3/predictions/${id}/result`, { headers: HEADERS });
    const j = await r.json();
    const st = j.data.status;
    if (st === "completed") {
      const url = j.data.outputs[0];
      const vid = await fetch(url);
      await pipeline(vid.body, fs.createWriteStream(out));
      console.log("OK  ", out);
      return;
    }
    if (st === "failed") {
      console.log("FAIL", name, j.data.error);
      return;
    }
  }
  console.log("TIMEOUT", name);
}

const only = process.argv[2];
for (const [name, sourceImg, prompt] of JOBS) {
  if (only && !name.includes(only)) continue;
  try { await generate(name, sourceImg, prompt); }
  catch (e) { console.log("EXC", name, e.message); }
}
