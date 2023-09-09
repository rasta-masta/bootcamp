
// const text = "Purw4dhika";

// function countLowerUpper(str) {
//   let lowercaseCount = 0;
//   let uppercaseCount = 0;

//   for (let i = 0; i < str.length; i++) {
//     const char = str[i];
//     if (/[a-z]/.test(char)) {
//       lowercaseCount++;
//     } else if (/[A-Z]/.test(char)) {
//       uppercaseCount++;
//     }
//   }

//   return [lowercaseCount, uppercaseCount];
// }

// console.log(`Hasil array jumlah huruf kecil, huruf besar dalam kata ${text}: `, countLowerUpper(text));

function lowerUpper(s){
  let upperCount = 0
  let lowerCount = 0
  
  for(let i = 0; i< s.length; i++){
    const char = s[i]
    if(/[a-z]/.test(char)) {
     upperCount ++
    } else if(/[A-Z]/.test(char)){
      lowerCount ++
    }
  }
  console.log(upperCount)
  console.log(lowerCount)  
}

const text = "Purw4dhika"
lowerUpper(text);
