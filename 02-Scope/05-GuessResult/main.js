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

// // ```js
let name = "John";

function sayHi(input) {
  console.log(name); // *** John <<-------------------
   name = input;
}

console.log(sayHi());  //  เนื่องจากcall FN ไม่ใส่ parameter ทำให้ code ในบรรทัด20 assign ค่าให้ name ไป = undefined

console.log(name); // **** undefined <<----------------
// // ```
