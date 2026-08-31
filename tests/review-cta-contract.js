const assert = require("node:assert/strict");
const fs = require("node:fs");

const html = fs.readFileSync("index.html", "utf8");

assert.doesNotMatch(html, /Chat with Monila/i, "personal chat wording should not be used in the review-focused CTAs");
assert.match(
  html,
  /class="hero-secondary"[^>]+href="https:\/\/www\.instagram\.com\/monila\.sharma\?igsh=MTBkYTlxanBudWs2bw=="[^>]+aria-label="See cake reviews on Instagram"[^>]*>See cake reviews on Instagram/,
  "the hero secondary action should invite visitors to review cakes on Instagram",
);
assert.match(
  html,
  /class="reviews-link"[^>]+href="https:\/\/youtube\.com\/@monila\.sharma\?si=8G37xtu4zeWlyZr_"[^>]*>[\s\S]*Watch cake reviews on YouTube/,
  "the footer contact action should invite visitors to watch cake reviews on YouTube",
);
assert.match(
  html,
  /class="order-dock-reviews"[^>]+href="https:\/\/youtube\.com\/@monila\.sharma\?si=8G37xtu4zeWlyZr_"[^>]*>Watch cake reviews on YouTube/,
  "the mobile dock should keep a review-focused secondary action",
);
assert.match(html, /aria-label="Order and review actions"/, "the mobile dock label should describe its mixed actions");

console.log("review CTA contract passed");
