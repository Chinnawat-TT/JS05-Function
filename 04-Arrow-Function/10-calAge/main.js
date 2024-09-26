// ให้เขียนฟังก์ชันนับอายุเป็นจำนวนวันโดยนับจากปีที่เกิด (ให้คิดว่าเกิดวันที่ 1 เดือน 1 ของปีนั้น)  
// ให้นับอายุจนถึงวันที่ 31 เดือน 12 ปี 2020





function calculateAge() {
    const birthdateInput = document.getElementById("birthdate").value;
    const today = document.getElementById("todaydate").value;
    const birthdate = new Date(birthdateInput);
    const todaydate = new Date(today);


    const timeDiff = todaydate.getTime() - birthdate.getTime();
    const days = Math.floor(timeDiff*0.0000000115740741);

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `You are approximately ${days} days old.`;
}


















// let leap = function (b){

//     sum = (b/4)  
// }




// let year = function (a){
    
//  return    a*365
// }

// console.log(year(10));

