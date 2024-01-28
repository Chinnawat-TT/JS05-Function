// ให้เขียนฟังก์ชันตรวจสอบปีที่เป็น leap year 
// - leap year คือปี ค.ศ. ที่หารด้วย 4 ลงตัว 
// - ยกเว้นปีที่เป็นผลคูณของ 100 เช่น 1800, 1900, 2000 จะต้องหารด้วย 400 ลงตัว

// หาร 4 ลงตัว = true
// 1800 = false
// 1900 = false
// 2000 = true



// หาร 100 ลงตัวไม่เป็น Leap Year *** ยกเว้น 400 ลงตัวเป็น Leap Year 
// ที่เหลือ หาร 4 ลงตัวเป็น  Leap Year

// isLeapYear : Year => Boolean
    //1.
const isLeapYear = (year) =>{
    
    if(year % 4 === 0 && year % 100 != 0) {          // ถ้า ปีหารเอาเศษด้วย4 แล้วเท่า0 เเละ ปีหารเอาเศษด้วย100ไม่เท่ากับ0
        return true ;
    }else if (year % 100 === 0 && year %400 != 0){
        return false;
    }else if (year % 400 == 0){
        return true ;
    }else { 
            return false
    }
}
 console.log(isLeapYear(2023));
    
    // 2.
    // if(year % 400 == 0){
    //     return true ;    
    // }else if (year % 100 == 0){
    //     return false ;
    // }else if ( year% 4 == 0){
    //     return true
    // }else {
    //     return false
    // }


    //3.
    // if(year %400 == 0){
    //     return true
    // }
    // if(year %100 == 0){
    //     return false
    // }
    // if(year %4 === 0){
    //     return true
    // }
    // return false


    //4.
    // if(year %100 === 0){
    //     return year %400 == 0
    // }
    // return year % 4 === 0

    //5.
    // return year %100 === 0 ? year %400 == 0 : year % 4 === 0 ;

// }
//6.
// const isLeapYear =(year)=> year %100 === 0 ? year %400 == 0 : year % 4 === 0 ;
