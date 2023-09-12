// in a football match the winning team gets 3 points, the losing team gets 0 point. If the game ends in a draw every team gets 1 point.

// You are given an array of N integers which has 2 indexs. the first index is the number of matches, and the second index is the number of points that have been earned. Your task is to find the results of the matches according to the number of matches and the number of points. it returns an array of integers having 3 value i.e. [win, draw, lose]

// example : 10 25 => 10 matches & 25 point

// return is : 8 1 1 => win 8, draw 1, lose 1 => 10 matches & 25 point.

function calculateResults(arr) {
  const [n, totalPoints] = arr;
  const win = Math.floor(totalPoints / 3);
  const draw = totalPoints % 3;
  const lose = n - win - draw;
  return [win, draw, lose];
}

// const arr1 = [10, 25]; // Example input => output 8, 1, 1
// const arr2 = [20, 60] // example input => output 20, 0, 0
// const arr3 = [11, 25] // example input => ouput 8, 1, 2
// const arr1 = [10, 25]; 
// const arr2 = [20, 60]; 
// const arr3 = [11, 25];


// console.log(calculateResults(arr1));
// console.log(calculateResults(arr2));
// console.log(calculateResults(arr3));

function calculateResults(arr) {
  const [n, totalPoints] = arr;

  const win = Math.floor(totalPoints / 3);
  
  const remainingPoints = totalPoints % 3;
  
  const draw = Math.min(remainingPoints, n - win);
  const lose = n - win - draw;

  return [win, draw, lose];
}

const arr1 = [10, 25];
const arr2 = [20, 60];
const arr3 = [11, 25];

console.log(calculateResults(arr1)); // Output: [8, 1, 1]
console.log(calculateResults(arr2)); // Output: [20, 0, 0]
console.log(calculateResults(arr3)); // Output: [8, 2, 1]
