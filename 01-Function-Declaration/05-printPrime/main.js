
//------------- checkPrime ------------------

function checkPrime(num) {
    let isPrime = true;
    for (let d = 2; d < num; d++) {
        if (num % d == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(num);
}

//-------------- printPrime ------------------

function printPrime(limit) {
    for (let n = 2; n <= limit; n++) {
        checkPrime(n);
    }
}
printPrime(10);

//--------------------------------------------
// new version
//--------------------------------------------
// function isPrime(num) {
//     for (let d = 2; d < num; d++) {
//         
//         if (num % d == 0) {
//             return false;
//         }
//     }

//     return true;
// }

// function printPrime(limit) {
//     for (let n = 2; n <= limit; n++) {
//         if (isPrime(n)) {
//             console.log(n);
//         }
//     }
// }

// printPrime(50);
