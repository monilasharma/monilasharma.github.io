const assert = require("node:assert/strict");
const fs = require("node:fs");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("style.css", "utf8");
const script = fs.readFileSync("script.js", "utf8");

assert.match(html, /class="hero-feature-layer hero-feature-layer-a\b/, "hero should have a dedicated first photocard image layer");
assert.match(html, /class="hero-feature-layer hero-feature-layer-b\b/, "hero should have a dedicated second photocard image layer");
assert.match(html, /data-hero-caption-title/, "hero caption should expose a runtime title hook");
assert.match(html, /data-hero-caption-meta/, "hero caption should expose a runtime category hook");

for (const url of [
  "https://www.instagram.com/monila.sharma?igsh=MTBkYTlxanBudWs2bw==",
  "https://youtube.com/@monila.sharma?si=8G37xtu4zeWlyZr_",
  "https://share.google/55R0zfP5cglQnEfVk",
]) {
  assert.match(html, new RegExp(url.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")), `${url} should be linked from the site`);
}

assert.match(html, /class="social-links"/, "social links should be grouped as a secondary footer section");
assert.match(css, /\.hero-feature-layer\b/, "stacked hero layers need dedicated styling");
assert.match(css, /\.hero-feature-layer\.is-active\b/, "hero layers need an active-state transition");
assert.match(css, /\.social-links\b/, "social links need dedicated footer styling");

assert.match(script, /const heroFeatureLayers\s*=\s*\[/, "runtime should collect the stacked hero layers");
assert.match(script, /setTimeout\(/, "hero rotation should schedule each transition");
assert.match(script, /4000|5000/, "hero rotation should use a four-to-five second cadence");
assert.match(script, /Math\.random\(\)/, "hero rotation should select a random gallery creation");
assert.match(script, /prefers-reduced-motion/, "hero rotation should respect reduced-motion preferences");
assert.match(script, /document\.visibilityState/, "hero rotation should pause when the page is hidden");

console.log("hero rotation and social links contract passed");
