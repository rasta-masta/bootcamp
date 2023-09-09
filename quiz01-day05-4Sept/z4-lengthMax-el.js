// function maxLengthOfMaxElement(arr) {
//   let maxElem = arr[0]; 
//   let maxLength = 1; 

//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > maxElem) {
//       maxElem = arr[i];
//       maxLength = 1; 
//     } else if (arr[i] === maxElem) {
//       maxLength++; 
//     }
//   }

//   return maxLength
  
// }

// const inputSize = 6;
// const inputArray = [1, 2, 5, 2, 3, 4, 5];
// const inputArray = [1, 2, 3, 4, 10, 11];
const arr = [10, 11, 12, 11, 10, 10, 10, 12];
// console.log(`jumlah nilai terbesar dalam array : [${arr}] jumlah-nya dalam array:`, maxLengthOfMaxElement(myArr));


function maxLengthOfMaxEl(s) {
  
  let maxLength = 1
  let maxEl = s[0]
  for(let i= 0; i< s.length; i++){
    
    if(s[i] > maxEl){
      maxEl = s[i];
      maxLength = 1
    }else if(s[i] === maxEl){
      maxLength++
    }
  }
  console.log(maxLength);
}

maxLengthOfMaxEl(arr);
