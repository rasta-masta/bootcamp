// Prime Number Generation is the process of generating a sequence of prime numbers within a specified range. Prime numbers are natural numbers greater than 1 that have only two divisors, 1 and itself.
// The Prime Number Generation process typically involves checking each number within the given range to determine whether it is a prime number or not. Generally, the algorithm used to check for prime numbers involves dividing the number by all integers smaller than it, starting from 2 up to the square root of the number. If no divisor produces a whole number quotient during this process, the number is considered prime.
// Input Format
// start number & end number

function generatePrimes(num1, num2){
  
  function primeNum(check){
    if (check <2){
      return false
    }

    for(let i=2; i<= Math.sqrt(check); i++){
      if(check % i ===0){
        return false
      }
    }
    return true
  }

  const primes = [];
  for(let check = num1; check <= num2; check++){
    if(primeNum(check)){
      primes.push(check)
    }
  }

  return primes
}

console.log(generatePrimes(1, 10))
console.log(generatePrimes(10, 20))
console.log(generatePrimes(20, 30))
console.log(generatePrimes(10, 30))
