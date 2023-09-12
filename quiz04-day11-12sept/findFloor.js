// Given a room number, You have to define what floor its located, it must return an array ([n]). n: floor number
// Here are the room formation for each floor: 1st floor: 5 rooms --> 1,2,3,4,5 2nd floor: 6 rooms --> 6,7,8,9,10,11 3rd floor: 7 rooms --> 12,13,14,15,16,17,18 4th floor: 5 rooms --> 19,20,21,22,23 5th floor: 6 rooms --> 24,25,26,27,28,29 6th floor: 7 rooms --> 30,31,32,33,34,35,36 . . etc.

// For example, room number 49 is located in 9th floor. Then, it must return [8]

// function calculateResults(arr) {
//   const [n, totalPoints] = arr;
//   const win = Math.floor(totalPoints / 3);
//   const draw = totalPoints % 3;
//   const lose = n - win - draw;
//   return [win, draw, lose];
// }

// const arr = [2, 20, 60]; // Example input
// const results = calculateResults(arr);

// console.log(results);

// 

function getFloor(room) {
  let roomsPerFloor = [5, 6, 7, 5, 6, 7];
  let floor = 0;
  
  for(let i= 0; room > roomsPerFloor[i % 6]; i++){
    room -= roomsPerFloor[i % 6];
    floor++;
  }

  floor += Math.ceil(room / 5);
  return floor;
};

console.log(getFloor(120));

// function getFloors(floor) {
  
//   let rooms = 5; 
//   let floor = 0;

//   for (let num = 1; num <= floor; num++) {
    
//     rooms += num % 3 === 0 ? -2 : 1; 
//   }
//   return floor;
// }  


// 1st floor = [1, 2, 3, 4, 5]
// 2st floor  = [6, 7, 8 ,9, 10, 11]
// 3 floor  lt3 = [12, 13, 14, 15, 16, 17]
// let  lt4 = [18, 19, 20, 21, 22]
// let  lt5 = [23, 24, 25, 26, 27, 28]
// let  lt6 = [29, 30, 31, 32, 33, 34, 35]
// let  lt7 = [36, 37, 38, 39, 40]
// let  lt8 = [41, 42, 43, 44, 45, 46]
// let  lt9 = [47, 48, 49, 50, 51, 52, 53]