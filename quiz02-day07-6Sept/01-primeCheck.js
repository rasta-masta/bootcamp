const cekPrime = (number) => {
  let i = 1
  let divider = 0
  while(i <= number){
    if(number%i === 0){
      divider++
    }
    i++
  }
  const res = `${number} ${divider === 2 ? 'adalah' : 'bukan'} bilangan Prima`
  return res
} 

console.log(cekPrime(21));