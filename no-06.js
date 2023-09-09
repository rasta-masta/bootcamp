function findOdd(a){
  const hasilEven = [];
  const hasilOdd = []
  
  const res = a.filter((num) => num%2 ===0);
  hasilEven.push(...res)
  const res2 = a.filter((num) => num%2 !==0)
  hasilOdd.push(...res2)

  console.log(hasilEven)
  console.log(hasilOdd)
}

let arr = [10, 15, 19, 20, 22, 25, 30]
findOdd(arr);