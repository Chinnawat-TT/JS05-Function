// บรรทัด \*, \*\*, ให้ผลลัพธ์เป็นอะไร เพราะอะไร

// ```js
// function sayHi(age) {
//     if (age < 12) alert('Hi kid');
// }
// console.log(sayHi); // *
// console.log(sayHi(10)); // **
// ```


function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi); // *   show function

console.log(sayHi(10)); // ** function sayHi active ,if(10<12) => true 