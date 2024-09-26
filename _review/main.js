/*
## การเขียนฟังก์ชั่นมี 2 แบบหลักๆ

1.Function Declaration / named Function
2.Function Expression / มักจะถูกเขียนในรูปของ  anonymous Function



*/
/*
การใช้งานฟังก์ชั่น
1.ประกาศฟังก์ชั่น => กำหนดชื่อ , input
2.เรียกใช้งาน



*/


// 1. Define
function sayHi (name,lastname){

    console.log(`Hello ${name} ${lastname}`);
}

// 2. Call

sayHi("John","Doe");
sayHi("Pavit" , "Pimchangul");


// Return value  ผลลัพธ์ที่ได้จากการรันฟังก์ชั่นจนเสร็จ
// add(5,6) == Return Value , FN Result

function add(x,y){
    let result = x+y ;
    return result

}

console.log(11 === add(5,6)); //Done : add(5,6) === result = 11



let r = add(5,6) ; // reuseale result
console.log(add(5,6)) // one time use 


function isEven(n){
    // if(n % 2 == 0){
    //     return ture ;
    // }else {
    //     return false ;
    // }
//----------------------------
    // if(n % 2 == 0){
    //     return ture ;
    // }
    // return false ;
    
//-----------------------------
return n % 2 == 0  
//return 6 % 2 == 0  (true)

//-------------------------
}

console.log (isEven(6));

// check point
// - Declare : ประกาศเป็น
// - Params : รับ  input 
// - return :  เข้าในเรื่อง  return
// - call : รับฟังก์ชั่น

// ###  FN Exprssion

let a = 5*2+7 ;
// variable = expression
/*
expression
-single value : 7
-combine expression : 7+2
-FN result : add(7,2)

*/

let myFunc = add;
let z = console.log;
// Format : Variable =FN (FN Exprssion)
// FN Expression : การ  assign FN ให้กับ Variable


console.log(myFunc(5,2))
z("Hi") // z = console.log

// Anonymous FN

// syntax : FN Expression
//  อธิบาย : กำลัง  assign Anonymous FN  ให้กับตัวเเปร  sayHello
const sayHello = function(name) {
    console.log("Hi " + name);
};

sayHello("Expression");

// 1. function add() {}
// 2A. let add = function () {}
// 2B. let add = () => {}

const minus = (a,b) => a - b;
const munusTwo = a => a - 2;


