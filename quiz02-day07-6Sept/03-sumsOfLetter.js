function countSequencesWithValues(s) {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const valMapping = {};

  for (let i = 0; i < alphabet.length; i++) {
    valMapping[alphabet.charAt(i)] = i + 1;
  }

  valMapping[' '] = 5;    
  valMapping['!', '.', ',', '?', '@', '&', '/', '(', ')'] = 10;    
  let totalSum = 0;

  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i).toUpperCase();

    if (valMapping[char] !== undefined) {
      totalSum += valMapping[char];
    } else {
      totalSum += 10;
    }
  }

  return totalSum;
}

const inputString = 'Reading Book!';
const result = countSequencesWithValues(inputString);
console.log(result); 


