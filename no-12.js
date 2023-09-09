function findSecondSmallest(arr) {
  if (arr.length < 2) {
    return 'Array min ada 2 element';
  }

  const sortedArr = arr.slice().sort((a, b) => a - b);
  return sortedArr[1];
}

const numbers = [5, 2, 8, 1, 9, 4];
const secondSmallest = findSecondSmallest(numbers);

console.log('Second Smallest:', secondSmallest);