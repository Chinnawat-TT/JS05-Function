// ให้เขียนฟังก์ชันตรวจสอบตัวเลขว่าหาร 7 ลงตัวหรือไม่

// function sum(num) {

//     if( num % 7 === 0){
//         return true
//     }
//     else{
//         return false
//     }
// }

// console.log(sum(7));

const sum = num => num % 7 === 0 ;

console.log(sum(21));