// Create a function to calculate array of student data
// ● The object has this following properties :
// ○ Name → String
// ○ Email → String
// ○ Age → Date
// ○ Score → Number
// ● Parameters : array of student
// ● Return values :
// ○ Object with this following properties :
// ■ Score
// ● Highest
// ● Lowest
// ● Average
// ■ Age
// ● Highest
// ● Lowest
// ● Average

class Student {
  constructor(name, birthdate, email, score) {
    this.name = name;
    this.birthdate = birthdate;
    this.email = email;
    this.score = score;
  }
}

const student1 = new Student("andi", "1995-01-01", "andi@gmail.com", 80) 
const student2 = new Student("budi", "1996-01-01", "budi@gmail.com", 70) 
const student3 = new Student("cahyo","1997-01-01", "cahyo@gmail.com", 90) 

const arrStudent = [student1, student2, student3]

function convertAge(date) {
  let birthdate = new Date(date).getTime();
  let now = new Date().getTime();
  let diff = (now - birthdate);

  return Math.floor(diff/(24 *60 *60 *1000)/365)
}

function stats(arr) {
  let maxScore = Math.max(...arr.map((item)=> item.score)) 
  let minScore = Math.min(...arr.map((item) => item.score))
  let avgScore = arr.map(item => item.score).reduce((a, b) => a + b)/arr.length
  
  let maxAge = Math.max(...arr.map(item => convertAge(item.birthdate)));
  let minAge = Math.min(...arr.map(item => convertAge(item.birthdate)));
  let avgAge = arr.map(item => convertAge(item.birthdate)).reduce((a, b)=> a+b)/arr.length

  return {
    score : {
      max : maxScore,
      min : minScore,
      avg : avgScore,
    },  
    age : {
      max : maxAge,
      min : minAge,
      avg : avgAge
    }  
  }
}

console.log(stats(arrStudent))
