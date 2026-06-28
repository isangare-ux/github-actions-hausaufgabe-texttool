const {
  zaehleWoerter,
  bereinigeLeerzeichen,
  inGrossbuchstaben,
  enthaeltWort
} = require("./texttool");

const beispielText = "  GitHub   Actions   automatisiert   Tests  ";

console.log("Texttool Demo");
console.log("Original:", beispielText);
console.log("Bereinigt:", bereinigeLeerzeichen(beispielText));
console.log("Anzahl Wörter:", zaehleWoerter(beispielText));
console.log("Großbuchstaben:", inGrossbuchstaben(beispielText));
console.log("Enthält Actions:", enthaeltWort(beispielText, "Actions"));
