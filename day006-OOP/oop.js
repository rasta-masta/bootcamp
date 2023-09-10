// console.log(Object['keys'](console));

// let person = {
//   name : "Mario",
//   age : 25
// }

// person.hobby = "Coding";

// // console.log(person.phone.adress); => err!
// console.log(person.phone?.adress) //undefine

// console.log(Object.keys(person))
// console.log(Object['keys'](person))

// for(const key in person){
//   let value = person[key]
//   console.log(key +":"+ value);
// }

// Create an object with getter and setter methods
// const person = {
//   firstName: "John",
//   lastName: "Doe",
  
//   get fullName() {
//     // Getter method to retrieve the full name
//     return this.firstName + " " + this.lastName;
//   },
  
//   set fullName(value) {
//     // Setter method to set the full name and update the first and last names
//     const parts = value.split(" ");
//     this.firstName = parts[0];
//     this.lastName = parts[1];
//   }
// };

// // Access the full name using the getter method
// console.log(person.fullName); // "John Doe"

// // Set the full name using the setter method
// person.fullName = "Alice Johnson";

// // Access the updated full name
// console.log(person.fullName); // "Alice Johnson"
// console.log(person.firstName); // "Alice"
// console.log(person.lastName);  // "Johnson"

// person.firstName = "Luigi"
// console.log(person.firstName)

// const person = {
//   firstName : "John",
//   lastName : "Doe",
//   greet() {
//     console.log(`Hello ${this.firstName}`)
//   }
// }

// person.greet()

// Define a reusable person object template with a greet method
// const personTemplate = {
//   greet() {
//     console.log(`Hello, ${this.firstName}`);
//   }
// };

// Create multiple person objects using the personTemplate
// const person1 = {
//   firstName: "John",
//   lastName: "Doe",
// };

// const person2 = {
//   firstName: "Alice",
//   lastName: "Smith",
// };

// // Attach the greet method to each person object
// // person1.greet = personTemplate.greet;
// person2.greet = personTemplate.greet;

// // Call the greet method on each person object
// // person1.greet(); // "Hello, John"
// person2.greet(); // "Hello, Alice"

// Define source objects
// const source1 = { a: 1, b: 2 };
// const source2 = { b: 3, c: 4 };

// // Create a target object
// const target = { c: 5, d: 6 };

// // Use Object.assign() to merge the source objects into the target object
// const mergedObject = Object.assign({}, source1, source2);

// console.log(mergedObject); // { c: 4, d: 6, a: 1, b: 3 }

// Define a prototype object
// const personPrototype = {
//   greet() {
//     console.log(`Hello, ${this.firstName}`);
//   }
// };

// // Create a new object with personPrototype as its prototype
// const orang = Object.create(personPrototype);

// // Set properties on the new object
// orang.firstName = "John";
// orang.lastName = "Doe";

// // Call the greet method on the new object
// orang.greet(); // "Hello, John"

// Define an object with properties
// const person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 30,
//   email: "john@example.com"
// };

// // Use Object.entries() to get an array of [key, value] pairs
// const entries = Object.entries(person);

// Iterate through the array of [key, value] pairs
// for (const [key, value] of entries) {
//   console.log(`${key}: ${value}`);
//   console.log(key + ":" + value);
// }

// for(const [key, value] in entries) {
//   console.log(key + ":" + value);
// }
// const newObj = []
// const b = entries.forEach(([key, value]) => {
//   newObj.push(key + " : " + value)
// })

// console.log(newObj)

// const a = entries.map(([key, value]) => {
//   return (`${key} : ${value}`) ;
// })

// console.log(a)

const person = {
  firstName: "John",
  lastName: "Doe",
  address: {
    street : "Ciwastra",
    city : "Bandung"
  }
};

// Freeze the person object
Object.freeze(person);

person.firstName = "Luigi"
person.hobby = "Reading"
delete person.address.street 

console.log(person)
