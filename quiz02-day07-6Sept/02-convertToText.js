function convArr(s) {
  const alphabet = "ABCDEFGHIJKLMNOPQRZTUVWXYZ";
  let result = '';

  for(let num of s){
    if(num === 0){
      result += ' ';
    } else {
      const adjustNum = [num - 1] % 26
      result += alphabet.charAt(adjustNum);
    }
  }
  return result
}

// const arr = [16, 21, 18, 23, 1, 4, 8, 9, 11, 1];
const arr = [10, 1, 11, 1, 18, 20, 1, 0, 2, 1, 20, 1, 13];

console.log(convArr(arr));

