// <!-- ให้เขียนฟังก์ชันคำนวณแต้มฟุตบอล โดยชนะได้ 3 คะแนน เสมอได้ 1 คะแนน และแพ้ไม่ได้คะแนน  -->

// ทีม  a  แข่ง 10 ชนะ 7 เสมอ 2 เเพ้ 1
// math 10   win 7  draw 2  lose 0  =  21+2+0=23 
// math 10   win 10                 =  30
// math 10   win 5 draw 3  lose 2   =  15+3+0=18

// function sumScore (win,draw="0") {

//    return (win*3)+(draw)

    
// }

const sumScore = (win, draw="0") => win*3 + draw ;


console.log(sumScore(5,3));


