//FILTER METHOD and INCLUDES
function diff(a, b){
  const hasil = []
  
  const res = a.filter((el) => !b.includes(el))
  hasil.push(...res)
  console.log(hasil)
}

arr1 = [10, 33, 20, 57, 40, 80, 77]
arr2 = [10, 30, 20, 55, 35, 80, 66]
diff(arr1, arr2);

//LOOP ..OF METHOD 
function diff2(a, b){
  const hasil = []

  for(const num of b){
    if (!a.includes(num)){
      hasil.push(num)
    }
  }
  console.log(hasil)
}

diff2(arr1, arr2);

//FOR EACH METHOD
function diff3(a, b) {
  const hasil = []

  a.forEach((num) => {
    if (!b.includes(num)) {
      hasil.push(num)
    }
  })
  console.log(hasil)
}

diff3(arr1, arr2)