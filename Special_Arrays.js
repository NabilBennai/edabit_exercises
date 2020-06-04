/*

Special Arrays

An array is special, if every even index contains an even number and every odd index contains an odd number. Create a function that returns true if an array is special, and false otherwise.


Examples

isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]) ➞ true
? Even indices: [2, 4, 6, 6]; Odd indices: [7, 9, 1, 3]
isSpecialArray([2, 7, 9, 1, 6, 1, 6, 3]) ➞ false
? Index 2 has an odd number 9.
isSpecialArray([2, 7, 8, 8, 6, 1, 6, 3]) ➞ false
? Index 3 has an even number 8.

*/

function isSpecialArray(arr) {
  let parity = arr.map((x) => x % 2).join("");
  let pattern =
    arr.length % 2 == 0
      ? "01".repeat(arr.length / 2)
      : "01".repeat((arr.length - 1) / 2) + "0";
  return parity == pattern;
}

// isSpecialArray([2, 7, 4, 9, 6, 1, 6, 3]);
// isSpecialArray([2, 7, 9, 1, 6, 1, 6]);
