// An anagram checker is a program or function that determines whether two strings are anagrams of each other. An anagram is a word or phrase formed by rearranging the letters of another word or phrase. In other words, if the characters of one string can be rearranged to form the other string, they are considered anagrams.

// For example, let's consider the strings "listen" and "silent". After removing whitespace and converting them to lowercase, both strings become "listen". When sorted, they become "eilnst". Since the sorted strings are identical, we conclude that "listen" and "silent" are anagrams.

// Input Format

// string

function areAnagrams(str1, str2) {
  str1 = str1.replace(/\s/gi, '')
  str2 = str2.replace(/\s/gi, '')

  if (str1.length !== str2.length) {
    return false;
  }

  const sortedStr1 = str1.split('').sort().join('');
  const sortedStr2 = str2.split('').sort().join('');

  return sortedStr1 === sortedStr2;
}

const a = "dormitory";
const b = "dirty room";

const c = "fried";
const d = "fired";

console.log(areAnagrams(a, b));
console.log(areAnagrams(d, c));

// let name = "john ** doe"
// console.log(name.split(' '));

// const csv = "John,Doe,30";
// const fields = csv.split(',');

// console.log(fields)

// const fruits = ["apple", "banana", "cherry"];
// const result = fruits.join(", ");
// console.log(result);

// const text = "Ini adalah paragraf pertama. Ini adalah paragraf kedua. Setiap paragraf memiliki beberapa kalimat. Kalimat pertama. Kalimat kedua.";

// const sentence = text.match(/[^.!?]+[.!?]+/);

// if (sentence) {
//   console.log(`Kalimat pertama: ${sentence[0].trim()}`);
// }

// const text1 = "Ini adalah paragraf pertama. Ini adalah paragraf kedua. Setiap paragraf memiliki beberapa kalimat. Kalimat pertama. Kalimat kedua.";

// const sentences = text1.match(/[^.!?]+[.!?]+/g);

// if (sentences) {
//   sentences.forEach((sentence, index) => {
//     console.log(`Kalimat ${index + 1}: ${sentence.trim()}`);
//   });
// }