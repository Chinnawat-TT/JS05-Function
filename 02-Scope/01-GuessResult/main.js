// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// ```js
// let name = 'John';
// function sayHi() {
//   alert('Hi, ' + name);
// }
// name = 'Pete';
// sayHi(); // *
// ```

let name = 'John';

function sayHi() {
  alert('Hi, ' + name);
}

name = 'Pete';

sayHi(); // *  "Hi Pete" เพราะ ใน FN scope ไม่มี local variable ตัวเเปร local สามารถออกมาใช้ค่า variable  outer scope ได้
