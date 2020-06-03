function countVowels(str) {
  return Array.from(str).reduce(
    (s, letter) => (Array.from("aeiou").includes(letter) ? 1 : 0),
    0
  );
}

function getVowels(str) {
  var m = str.match(/[aeiou]/gi);
  return m === null ? 0 : m.length;
}
