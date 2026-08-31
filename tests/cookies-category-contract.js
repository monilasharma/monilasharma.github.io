const assert = require("node:assert/strict");
const fs = require("node:fs");

const html = fs.readFileSync("index.html", "utf8");
const sourceCatalog = JSON.parse(fs.readFileSync("cakes.json", "utf8"));
const script = fs.readFileSync("script.js", "utf8");
const syncSkill = fs.readFileSync("kitchen-sync/SKILL.md", "utf8");
const onlineSync = fs.readFileSync("kitchen-sync/scripts/sync_cakes.py", "utf8");
const offlineSync = fs.readFileSync("kitchen-sync/scripts/sync_offline.py", "utf8");
const imageListMatch = script.match(/const images = (\[[\s\S]*?\n\]);\s*\n\s*const cakeCatalog/);
const runtimeCatalogMatch = script.match(/const cakeCatalog = (\[[\s\S]*?\n\]);/);

assert.ok(imageListMatch, "runtime image list should be embedded in script.js");
assert.ok(runtimeCatalogMatch, "runtime catalog should be embedded in script.js");
const runtimeImages = JSON.parse(imageListMatch[1]);
const runtimeCatalog = JSON.parse(runtimeCatalogMatch[1]);

const cookieFiles = [
  "nutty-butter-cookies.webp",
  "colorful-fruit-sprinkle-cookies.webp",
  "classic-round-butter-cookies.webp",
];

for (const fileName of cookieFiles) {
  const sourceEntry = sourceCatalog.find((entry) => entry.fileName === fileName);
  const runtimeEntry = runtimeCatalog.find((entry) => entry.fileName === fileName);

  assert.equal(sourceEntry?.category, "Cookies", `${fileName} should be in the Cookies category in cakes.json`);
  assert.equal(runtimeEntry?.category, "Cookies", `${fileName} should be in the Cookies category in script.js`);
}

assert.equal(
  sourceCatalog.filter((entry) => entry.category === "Cookies").length,
  cookieFiles.length,
  "Cookies should contain exactly the three standalone cookie products",
);
assert.equal(
  sourceCatalog.filter((entry) => entry.category === "Specialty").length,
  24,
  "Specialty should exclude standalone cookie products",
);
assert.deepEqual(
  runtimeImages.filter((fileName) => cookieFiles.includes(fileName)),
  cookieFiles,
  "the Cookies filter should have all three standalone cookie images available to render",
);

for (const fileName of ["oreo-cookie-crunch-cake-bowl.webp", "biscoff-cookie-cream-cake-bowl.webp"]) {
  const entry = sourceCatalog.find((candidate) => candidate.fileName === fileName);
  assert.equal(entry?.category, "Cake Bowls", `${fileName} should remain in Cake Bowls`);
}

assert.match(html, /data-category="Cookies"/, "catalog filters should expose a Cookies category");
assert.match(syncSkill, /Cookies/, "kitchen-sync documentation should include the Cookies category");
assert.match(onlineSync, /Cookies/, "online kitchen-sync prompt should include the Cookies category");
assert.match(offlineSync, /Cookies/, "offline kitchen-sync prompt should include the Cookies category");

console.log("cookies category contract passed");
