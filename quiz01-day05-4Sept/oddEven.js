let myArr = [14, 15, 17, 19, 20, 24]

// function countOddEven(arr) {
//   let oddCount = 0;
//   let evenCount = 0;

//   arr.forEach(function (number) {
//     if (number % 2 === 0) {
//       evenCount++;
//     } else {
//       oddCount++;
//     }
//   });

//   return [oddCount, evenCount];
// }

// console.log(`Hasil array jumlah ganjil dan genap dalam [${myArr}]: `, countOddEven(myArr));


function oddEvent(num){
  let oddCount = 0
  let eventCount = 0
  const oddArr = [];
  const eventArr = [];

  num.forEach((item) => {
    if(item%2 === 0){
      eventCount ++
      eventArr.push(item)
    }else {
      oddCount ++
      oddArr.push(item)
    }
  })
  console.log([oddCount, eventCount])
  console.log(oddArr);
  console.log(eventArr);
}

oddEvent(myArr);