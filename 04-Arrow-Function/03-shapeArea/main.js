// บรรทัดที่มี \* , \*\*ให้ผลลัพธ์เป็นอะไร เพราะอะไร

// ```js
const square = (n) => {
  n ** 2;
};

console.log(square(7)); // * Ans = undifined  ,ถ้าจะให้ได้ 49 ใส่ return ที่ Expression  return n**2  arrow fn ถ้าเขียนมากกว่า 1 บรรทัดจะต้องใส่ return
// // ```

// ```js
// const calcCircleArea = (r) => Math.PI * r ** 2;
// console.log(calcCircleArea(3)); // ** Ans = 28.27433
// ```