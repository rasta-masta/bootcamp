function addArr(el){
  let arr = [10, 20, 30, 40, 50]
  if(!arr.includes(el)){
    arr.push(el)
  }
  console.log(arr)
}

addArr(75);
addArr(30);