const text = "Congratulations"

// function countVowels(word) {
//   const vowels = "aiueoAIUEO"; 
//   let vowelCount = 0;

//   for (let i = 0; i < word.length; i++) {
//     const char = word[i];
//     if (vowels.includes(char)) {
//       vowelCount++;
//     }
//   }

//   return vowelCount;
// }

// console.log(`jumlah huruf vokal dalam kata ${text}: `, countVowels(text), `huruf`);


function countVow(s) {
  const vowel = "aiueoAIUEO"
  let res = 0

  for(let i = 0; i<s.length; i++){
    const char = s[i]

    if(vowel.includes(char)){
      res ++
    }
  }
  console.log(res)
}

countVow(text);

