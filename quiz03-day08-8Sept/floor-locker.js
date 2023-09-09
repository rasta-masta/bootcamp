
// Here are the number of lockers for each floors: 
// 1st floor: 5 lockers --> 1,2,3,4,5 
// 2nd floor: 6 lockers --> 6,7,8,9,10,11 
// 3rd floor: 7 lockers --> 12,13,14,15,16,17,18 
// 4th floor: 5 lockers --> 19,20,21,22,23 
// 5th floor: 6 lockers --> 24,25,26,27,28,29 
// 6th floor: 7 lockers --> 30,31,32,33,34,35,36 . . etc.

// You have to define the highest locker number, it must return an array ([0,1]). 0: floor number, 1: locker number..example:

// sample input = 1,
// sample output = [1, 0]

// sample input = 0,
// sample output = [0, 0]

// sample input = 5,
// sample output = [5, 29]

// sample input = 3
// sample output = [3, 18]

function getFloors(floor) {
  if (floor < 0) {
    return [0, 0]; 
  }

  let lockersPerFloor = 5; 
  let highestLocker = 0;

  for (let num = 1; num <= floor; num++) {
    highestLocker += lockersPerFloor;
    lockersPerFloor += num % 3 === 0 ? -2 : 1; 
  }
  return [floor, highestLocker];
}

// function findHighestLocker(floorNumber) {
//   if (floorNumber < 0) {
//     return [0, 0]; // Return [0, 0] for invalid input
//   }

//   let lockersPerFloor = 5; // Initial number of lockers on the 1st floor
//   let highestLocker = 0;

//   for (let floor = 1; floor <= floorNumber; floor++) {
//     highestLocker += lockersPerFloor;
//     lockersPerFloor += floor % 3 === 0 ? -2 : 1; // Update lockersPerFloor based on the floor number
//   }

//   return [floorNumber, highestLocker];
// }
// console.log(findHighestLocker(0)); // [0, 0]
// console.log(findHighestLocker(1)); // [1, 5]
// console.log(findHighestLocker(2)); // [2, 11]
// console.log(findHighestLocker(3)); // [3, 18]
// console.log(findHighestLocker(4)); // [4, 23]
// console.log(findHighestLocker(5)); // [5, 29]
// console.log(findHighestLocker(6)); // [6, 36]

console.log(getFloors(0)); // [0, 0]
console.log(getFloors(1)); // [1, 5]
console.log(getFloors(2)); // [2, 11]
console.log(getFloors(3)); // [3, 18]
console.log(getFloors(4)); // [4, 23]
console.log(getFloors(5)); // [5, 29]
console.log(getFloors(6)); // [6, 36]









// function getLockerNumbers(floorNumber) {
//   if (floorNumber <= 0) {
//     return [[0, 0]]; // Return an array with [0, 0] for invalid input
//   }

//   let lockersPerFloor = 5; // Initial number of lockers on the 1st floor
//   let lockerNumbers = []; // Array to store locker numbers for each floor

//   for (let floor = 1, locker = 1; floor <= floorNumber; floor++) {
//     const floorLockers = [];
//     for (let i = 0; i < lockersPerFloor; i++, locker++) {
//       floorLockers.push(locker);
//     }
//     lockerNumbers.push(floorLockers);

//     lockersPerFloor += floor % 3 === 0 ? -2 : 1; // Update lockersPerFloor based on the floor number
//   }

//   return lockerNumbers;
// }

// const floorNumber = 9;
// const lockerInfo = getLockerNumbers(floorNumber);

// for (let floor = 0; floor < lockerInfo.length; floor++) {
//   console.log(`Floor ${floor + 1}: ${lockerInfo[floor].join(', ')}`);
// }

// getLockerNumbers(1)