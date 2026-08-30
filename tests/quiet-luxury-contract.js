const assert = require("node:assert/strict");
const fs = require("node:fs");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("style.css", "utf8");
const script = fs.readFileSync("script.js", "utf8");

assert.match(html, /class="hero-feature\b/, "hero should expose one editorial feature image");
assert.doesNotMatch(html, /class="hero-image-strip\b/, "legacy three-card hero should be removed");
assert.match(html, /id="postcard-order-link"/, "detail sheet needs an order action");
assert.match(html, /data-order-number="918796312333"/, "order action should carry Monila's WhatsApp number");
assert.match(css, /\.hero-feature\b/, "hero feature needs dedicated styling");
assert.doesNotMatch(css, /\.hero-image-strip\b/, "legacy hero strip styles should be removed");
assert.match(css, /\.postcard-order\b/, "detail order action needs dedicated styling");
assert.match(script, /const postcardOrderLink\s*=\s*document\.getElementById\("postcard-order-link"\)/, "runtime should own the detail order action");
assert.match(script, /encodeURIComponent\(.*selectedNote\.title/s, "order message should include the selected creation title");
assert.match(script, /postcardOrderLink\.href\s*=\s*.*wa\.me\/918796312333/s, "runtime should build the WhatsApp order URL");

console.log("quiet-luxury contract passed");
