// บรรทัด \* ให้ผลลัพธ์เป็นอะไร เพราะอะไร

// ```js
// function sayHi(name) {
//   let name = "Guest";
//   console.log(name); // *
// }

// sayHi("Jim");
// ```

function sayHi(name) {
  let name = "Guest";
  console.log(name); // * ใช้งานไม่ได้ เพราะ มีการประกาศตัวเเปรแบบ declared ไปในฟังชั่น (ตัวเเปร name ซ้ำ)
}

sayHi("Jim");