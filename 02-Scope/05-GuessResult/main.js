// บรรทัด \*, \*\*, \*\*\* และ \*\*\*\* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

// // ```js
// let message = "Welcome to Thailand";

// function logMessage(message) {
//   message = "Hello everybody";
//   console.log(message); // *  Hello everybody  <<--------------
// }

// logMessage(message);
// console.log(message); // ** welcome to Thailand <<-------------
// ```

// ```js
let name = "John";

function sayHi(input) {
  console.log(name); // *** John <<-------------------
   name = input;
}

sayHi();
console.log(name); // **** undefined <<----------------
// ```
