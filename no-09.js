function findDupl(arr) {
  const hasil = [];

  for(i =1; i< arr.length; i++){
    const value = arr[i];
    if(arr.indexOf(value) !== i){ //&& !hasil.includes(value)
      hasil.push(value);
    }
  }
  return(hasil)
}

const myArr= [50, 20, 40, 20, 30, 50, 30];
console.log(findDupl(myArr));

function findDuplicate(arr) {
  const hasil = []

  const res = arr.filter((value, index, self) => self.indexOf(value) !== index);
  
  hasil.push(...res)
  console.log(hasil)
}

findDuplicate(myArr);