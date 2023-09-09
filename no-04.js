//01. FOR LOOP METHOD
function addition(a, b){
  const res = []

  for(let i = 0; i < a.length; i++){
    res.push(a[i] + b[i]);  
  }
  console.log(res)
}

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 4, 3, 2, 1];
addition(arr1, arr2);

//02. MAP METHOD
function add(a, b){
  const res = a.map((item, index) => item + b[index]);
  console.log(res)
}

add(arr1, arr2);

//03. REDUCE METHOD
function add2(a, b){
  
  const res = a.reduce((hasil, value, index) => {
    hasil.push(value + b[index])
    return hasil
  }, [])
  console.log(res)
}

add2(arr1, arr2);

//04. forEach METHOD
function add3(a, b){
  const hasil = []

  const res = a.forEach((item, index) => {
    hasil.push(item + b[index])
  })
  return hasil  
}
console.log(add3(arr1, arr2));