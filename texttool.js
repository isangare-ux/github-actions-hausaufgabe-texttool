function bereinigeLeerzeichen(text) {
  return text.trim().replace(/\s+/g, " ");
}

function zaehleWoerter(text) {
  const bereinigt = bereinigeLeerzeichen(text);

  if (bereinigt.length === 0) {
    return 0;
  }

  return bereinigt.split(" ").length;
}

function inGrossbuchstaben(text) {
  return text.toUpperCase();
}

function enthaeltWort(text, wort) {
  return bereinigeLeerzeichen(text).includes(wort);
}

module.exports = {
  bereinigeLeerzeichen,
  zaehleWoerter,
  inGrossbuchstaben,
  enthaeltWort
};
