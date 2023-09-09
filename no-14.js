const findDuplicate = (arr) => {
  const hasil = [];

  for(i =1; i< arr.length; i++){
    const value = arr[i];
    if(arr.indexOf(value) === i){ //&& !hasil.includes(value)
      hasil.push(value);
    }
  }
  console.log(hasil)

  function sum(hasil) {
    let total = 0;
    hasil.forEach(item => {
      total  += item 
    })
    console.log('jumlah tanpa duplikat :', total);
  }
  sum(hasil)
}

const myArr = [10, 20, 40, 10, 50, 30, 10, 60, 10];
findDuplicate(myArr)



