// Convert the approved brand-girl PNGs to WebP and place in /assets/
import sharp from "sharp";

await sharp("product-images/test-ba/after.png")
  .resize({ width: 1200, height: 1500, fit: "cover", position: "centre" })
  .webp({ quality: 86 })
  .toFile("assets/br-result-1.webp");
console.log("wrote assets/br-result-1.webp (after)");

await sharp("product-images/test-ba/before.png")
  .resize({ width: 1200, height: 1500, fit: "cover", position: "centre" })
  .webp({ quality: 86 })
  .toFile("assets/br-result-2.webp");
console.log("wrote assets/br-result-2.webp (before)");
