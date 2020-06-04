/*
Spelling it Out

Create a function which takes in a word and spells it out, by consecutively adding letters until the full word is completed.

Examples

spelling("bee") ➞ ["b", "be", "bee"]
spelling("happy") ➞ ["h", "ha", "hap", "happ", "happy"]
spelling("eagerly") ➞ ["e", "ea", "eag", "eage", "eager", "eagerl", "eagerly"]

*/

function spelling(str) {
  let res = [];
  for (let index = 0; index < str.length; index++) {
    res.push(str.substring(0, index + 1));
  }
  return res;
}
