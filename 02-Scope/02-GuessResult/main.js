// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// ```js
// let phrase = 'Hello';
// if (true) {
//   let user = 'John';
//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }
// sayHi(); // *

let phrase = 'Hello';

if (true) {
  let user = 'John';
  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}
sayHi(); // *  Hello John เพราะ ใน Fn scope ไม่มีตัวเเปร user ตัวเเปรใน Fn scope สามารถออกมาใช้ค่าตัวเเปร outer scope ได้