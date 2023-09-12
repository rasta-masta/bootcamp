// Given an array of integers arr[] represents digits of a number. The task is to write a program to generate the largest number possible using these digits.


function findMaxNum(arr, n) {
  arr = arr.map(String).sort((a, b) => (b + a).localeCompare(a + b));

  return arr.join('');
}


console.log(findMaxNum([1, 2, 3, 4, 5, 6, 7], 7)); // Output: "7654321"
console.log(findMaxNum([1, 1, 2, 2], 4));         // Output: "2211"
console.log(findMaxNum([3, 7, 2, 5, 6], 5));      // Output: "Invalid input"
