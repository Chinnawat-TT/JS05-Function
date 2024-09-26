// ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

// ```js
// let x = 1;
// function func() {
//   console.log(x); // *
//   let x = 2;
// }
// func();
// ```

let x = 1;
function func() {
  
  console.log(x); // * error ใช้งานไม่ได้ เนื่องจากตัว x ซ้ำ ถ้าจะให้ใช้ได้ต้องประกาศตัวเเปร x บรรทัดแรกใต้ฟังชั่น
  let x = 2;
}

func();
console.log("x" ,x)