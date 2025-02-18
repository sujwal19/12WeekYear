
function isPrime(num1){

    if(num1 < 2){
        return `${num1} is not a prime number`
    }

    for (let i = 2; i <= Math.sqrt(num1); i++) {
        if(num1 % i == 0){
            return `${num1} is not a prime number`;            
        }
    }
    return `${num1} is a prime number.`
}

console.log(isPrime(29)); // Output: "29 is a prime number."
console.log(isPrime(97)); // Output: "97 is a prime number."
console.log(isPrime(4));  // Output: "4 is not a prime number."
console.log(isPrime(9));  // Output: "9 is not a prime number."
console.log(isPrime(25)); // Output: "25 is not a prime number."





