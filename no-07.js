//FILTER METHOD
function insert(arr, maxSize) {
  const hasil = [];
   
  const res = arr.filter((_, index) => index < maxSize);
  hasil.push(...res);

  console.log(hasil);
}

const myArr = [10, 15, 30, 25, 48, 70, 55, 60];
insert(myArr, 6);

//FOR OF LOOP METHOD
function extract(arr, maxSize){
  const hasil = [];

  for(const num of arr){
    if(hasil.length < maxSize){
      hasil.push(num);
    }else{
      break;
    }
  }
  console.log(hasil);
}

extract(myArr, 5);