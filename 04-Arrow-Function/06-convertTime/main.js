// ให้เขียนฟังก์ชัน Convert day to second

// 1 วัน 24 ชม   
// 1 ชม 60 นาที  = 24 ชม * 60 นาที  = 1440 นาที 
// 1นาที 60 วินาที = 1440 นาที *60 วินาที = 86400 วินาที

const inDay = 24 ;
const inMinute = 60 ;
const inSecond = 60 ;

const sum = num => (num*inDay)*inMinute*inSecond ;

console.log(sum(1));