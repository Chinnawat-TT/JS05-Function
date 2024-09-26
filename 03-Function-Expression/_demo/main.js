console.log("anonymous");

//1.# name fn , FN declaration
//function add () {}

//2.# : Anonymous

//##2A. IIFE : Intermediate Invoke Finction Expression

// (function (x,y) {
//   console.log(x+y);
// })(10,5);

// console.log(
//   (function (x, y) {
//     return x + y;
//   })(10, 5)
// );

// let a=  (function (x, y) {
//     return x + y;
//   })(10, 5);
//   console.log(a);

//2B.

//Variable = FN (FN == EXPRESSION)

//Assign anonymous FN to varia
// const myFuc = function (x, y) {
//   return x + y;
// };

// console.log(myFuc(5, 10));

// //Assign  name FN to variable

// const a = console.log;
// a("hi");

// ### Anonymous (Modern : Arrow syntax)

let a = function (x) {
  return x ** 2;
};


