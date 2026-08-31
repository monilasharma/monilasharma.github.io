const assert = require("node:assert/strict");
const fs = require("node:fs");

const html = fs.readFileSync("index.html", "utf8");
const css = fs.readFileSync("style.css", "utf8");

assert.match(
  html,
  /<meta\s+name="color-scheme"\s+content="light dark"\s*\/?\s*>/,
  "the document should advertise light and dark color schemes to the browser",
);
assert.match(css, /color-scheme:\s*light dark\s*;/, "the stylesheet should opt into automatic color-scheme handling");

const darkModeMatch = css.match(/@media\s*\(prefers-color-scheme:\s*dark\)\s*\{([\s\S]*)$/);
assert.ok(darkModeMatch, "the stylesheet should respond to the operating system dark-mode preference");

for (const token of ["--surface", "--surface-raised", "--surface-subtle", "--text", "--heading", "--interactive", "--line", "--shadow-soft"]) {
  assert.match(darkModeMatch[1], new RegExp(`${token}:`), `${token} should have a dark-mode value`);
}

assert.match(css, /body\s*\{[\s\S]*background:\s*var\(--surface\)/, "the page background should use the adaptive surface token");
assert.match(css, /\.site-nav\s*\{[\s\S]*background:\s*var\(--surface\)/, "navigation should use the adaptive surface token");
assert.match(css, /\.card-media\s*\{[\s\S]*background:\s*var\(--surface-subtle\)/, "catalog media should use the adaptive subtle surface token");
assert.match(css, /\.postcard-modal\s*\{[\s\S]*background:\s*var\(--modal-backdrop\)/, "the detail modal should use an adaptive backdrop");

console.log("dark mode contract passed");
