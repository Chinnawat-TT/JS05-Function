// ให้เขียนฟังก์ชันคำนวณค่า factorial
// การนำตัวเลข n! = n × (n - 1) × (n - 2) × (n - 3) × ... × 3 × 2 × 1

let factorial = function(n){

    if (n === 0 || n === 1) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }


console.log(factorial(5));








