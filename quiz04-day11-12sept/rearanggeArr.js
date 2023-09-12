// Given an array of number, you have to print the array in order smallest number, the Largest number, 2nd smallest number, 2nd largest number, 3rd smallest number, 3rd largest number, and so on…

// function rearrange(arr){
//     arr.sort((a,b)=>a-b)
//     let l= 0
//     let r= arr.length-1
//     let result = []
//     let smallest= true
//     while(l<=r){
//         if(smallest){
//             result.push(arr[l])
//             l++
//         }else{
//             result.push(arr[r])
//             r--
            
//         }
//         smallest=!smallest
//     }
//     return result
//   }
//   console.log(rearrange([1, 2, 3, 4, 5]));
//   console.log(rearrange([5, 8, 1, 4, 2, 9, 3, 7, 6]));
//   console.log(rearrange([1,, 1, 1, 1, 2, 2, 2]));
  
  function rearrangeArr(arr) {
    arr.sort((a, b) => a - b); 
  
    const result = [];
    const n = arr.length;
  
    for (let i = 0, j = n - 1; i <= j; i++, j--) {
      if (i === j) {
        result.push(arr[i]);
      } else {
        result.push(arr[i]);
        result.push(arr[j]);
      }
    }
  
    return result;
  }
  
  console.log(rearrangeArr([1, 2, 3, 4, 5]));
  console.log(rearrangeArr([5, 8, 1, 4, 2, 9, 3, 7, 6]));
  console.log(rearrangeArr([1, 1, 1, 1, 2, 2, 2]));  
  