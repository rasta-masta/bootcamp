function addition(arr) {
  let total = 0;
  arr.forEach(item => {
    total  += item 
  })
  console.log(total);
}

const myArr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
addition(myArr);

// lOOP..of METHOD
function sum(arr) {
  let total = 0
  for(const item of arr){
    total += item
  }
  console.log(total)
}

sum(myArr);