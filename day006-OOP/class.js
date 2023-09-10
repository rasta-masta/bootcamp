//Class Declaration
//This is Class Expression whixh is identical with function expression..(anonymous Class)
// const Person = class {
//   constructor(name, age, address, phone){
//     this.name = name,
//     this.age = age
//     this.address = address
//     this._phone = phone
//   }
  
//   greet() {
//     console.log(`Hello my name is ${this.name} and I am ${this.age} years old. I am from ${this.address} and this is my phonenumber : ${this.phone}`)
//   } 
// }

// const alice = new Person("Alice", 30, "bandung", "08128740413")

// alice.greet()

// const simon = new Person("Simon", 25);
// simon.greet()

// class User {
//   name = ""

//   constructor(name) {
//     this.name = name
//   }

//   greeting() {
//     console.log(`Hello ${this.name}!`)
//   }
// }

// const mario = new User("Mario");
// mario.greeting()

// class Person {
//   // No explicit constructor defined
// }

// const alice = new Person();
// console.log(alice); // Output: Person {}

// class Student { // template object
//   name = ""
//   // private property
//   #age = ""
//   program = ""

//   constructor(name, age, program) {
//       this.name = name
//       this.#age = age
//       this.program = program
//   }

//   greeting() {
//       console.log(`Hello ${this.name}`)
//   }

//   getAge() {
//       console.log(this.#age)
//   }
// }

// const student1 = new Student("Andi", 25, "Digital Marketing")
// const student2 = new Student("Budi", 26, "Data Science")
// const student3 = new Student("Cinta", 26, "UI/UX")

// console.log(student1.name);
// console.log(student1.age);
// student1.greeting()
// student1.getAge()
// student2.greeting()


// const students = [student1, student2, student3]
// console.log(students);

class Gender {
  constructor(gender) {
      this.gender = gender
  }
}

class Man extends Gender {
  constructor(name, age) {
      super("male")
      this.name = name
      this.age = age
  }
}

class Woman extends Gender {
  constructor(name, age) {
      super("female")
      this.name = name
      this.age = age
  }
}

let user1 = new Man("Andi", 25)
let user2 = new Woman("Bilqis", 25)
console.log(user1);
console.log(user2);

console.log(user1 instanceof Gender)
console.log(user1 instanceof Man)
console.log(user1 instanceof Woman)



// class DB {
//   static #connection = "";

//   static #initializeConnection() {
//     const randomNum = Math.ceil(Math.random() * 100);
//     DB.#connection = `New Database Connection ${randomNum}`;
//   }

//   static getConnection() {
//     if (!DB.#connection) {
//       DB.#initializeConnection(); // Corrected method name
//     }
//     return DB.#connection;
//   }
// }

// console.log(DB.getConnection());
// console.log(DB.getConnection());















// const Person = class {
//   constructor(name, age) {
//     this.name = name;
//     this.age = age;
//   }

//   greet() {
//     console.log(`Hello, my name is ${this.name}, and I am ${this.age} years old.`);
//   }
// };

// // Creating an instance of the anonymous class
// const alice = new Person("Alice", 30);

// // Calling the greet method
// alice.greet(); // Output: Hello, my name is Alice, and I am 30 years old.
