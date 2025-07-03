// class Animal {
//   constructor() {
//     this.constructor.displayType();
//   }
//   static displayType() {
//     alert("Animal");
//   }
//   showName() {
//     alert("animal");
//   }
// }

// class Rabbit extends Animal {
//   static displayType() {
//     alert("Rabbit");
//   }
// }

// new Animal(); // animal
// new Rabbit(); // rabbit
class PowerArr extends Array {
  isEmpty() {
    return this.length === 0;
  }
}

let arr = new PowerArr(1, 2, 39, 48, 2);
console.log(arr);
let filteredArr = arr.filter((x) => x > 10);
console.log(filteredArr);

console.log("hello world");
