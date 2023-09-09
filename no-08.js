//CONCAT METHOD
function join(arr1, arr2){
  const res = arr1.concat(arr2)
  const hasil = res.sort((a, b) => a-b)

  console.log(hasil)
}

const a1 = [10, 30, 50]
const a2 = [20, 40, 60]

join(a1, a2)

//SPREAD OPERATOR
function join2(arr1, arr2) {
  const res = [...arr1, ...arr2]
  const hasil = res.sort()
  console.log(hasil)
} 
const text1 = ['budi', 'simon', 'andi']
const text2 = ['rudi', 'mario', 'luigi']

join2(text1, text2);