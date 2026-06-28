const test = require("node:test");
const assert = require("node:assert/strict");

const {
  bereinigeLeerzeichen,
  zaehleWoerter,
  inGrossbuchstaben,
  enthaeltWort
} = require("./texttool");

test("bereinigeLeerzeichen entfernt unnötige Leerzeichen", () => {
  assert.equal(bereinigeLeerzeichen("  Hallo   Welt  "), "Hallo Welt");
});

test("zaehleWoerter zählt die Wörter richtig", () => {
  assert.equal(zaehleWoerter("GitHub Actions ist praktisch"), 4);
});

test("zaehleWoerter gibt bei leerem Text 0 zurück", () => {
  assert.equal(zaehleWoerter("   "), 0);
});

test("inGrossbuchstaben wandelt Text in Großbuchstaben um", () => {
  assert.equal(inGrossbuchstaben("github actions"), "GITHUB ACTIONS");
});

test("enthaeltWort erkennt ein vorhandenes Wort", () => {
  assert.equal(enthaeltWort("GitHub Actions Pipeline", "Actions"), false);
});
