// closure #1
// let b = 3;
// function impureFun(a) {
//     return a + b;
// }
// console.log(impureFun(2));


// closure = good way to use 
// it is used for data encapsulation, data will not leak out to surrounding environment

// #2 closure example
// const goodClosure = function outer() {
//     let state = "rabbit";
//     function inner() {
//         return `Hello ${state}`;
//     }
//     return inner;
// }
// console.log(goodClosure());

// #2 closure - lexical scoping
// function outer() {
//     const outerVar = 'I am from outer';
//     function inner() {
//         console.log(outerVar);
//   }
//     return inner;
// }
// const newClosure = outer();
// newClosure();

// #3 closure - private variables
// function counter() {
//     let count = 0;

//     return function () {
//         // Access and modify private variable
//         count++;
//         return count; 
//     }
// }
// const increment = counter()
// console.log(increment());
// console.log(increment());
// console.log(increment());
// console.log(increment());


// closure and IIFE

// const counter = (function () {
//     let count = 0;

//     return {
//         increment: function() {
//             count++;
//             console.log(count);
//         },
//         reset: function() {
//             count = 0;
//             console.log("Counter Reset");
//         },
//     };
// })();

// counter.increment();
// counter.increment();
// counter.reset();


// Closure and setTimeout

// function createTimers(){
//     for (let i = 0; i <= 5; i++) {
//         setTimeout(() => {
//             console.log(`Timer ${i}`);
//         }, 1000);
//     }
// }
// createTimers()

// Closure with this this keyword

// function Person(name) {
//     this.name = name;

//     this.sayName = function() {
//         console.log(this.name);
//     }

//     setTimeout(function() {
//      console.log(this.name);
//      // undefined beacause 'this' refers to global object   
//     }.bind(this), 1000);
//     // Fix with bind
// }

// const G = new Person("SDS");
// G.sayName()



// Function Currying (Closure Example)

// Normal function
// function add(a, b) {
//     return a + b;
// }
// console.log(add(15, 43));

// Function Currying
// function add(a) {
//     return function(b) {
//         return a + b;
//     };
// }

// // Undeclared variables (created without a keyword var, let, const), are always global, even if they are created inside a function.

// const addTwo = add(10);   // First function call with 10
// console.log(addTwo(35))  // second arguement as 35


// Scope
// let vest = 400;
// function leg() {
//     let neckCover = 40;

//         function squat() {
//         let shorts = 300;
//         console.log(neckCover);

//         function deadlift() {
//             let belt = 2000;
//             console.log(vest);
//         }
//         deadlift();
//     }
//     squat()
// }
// leg()

// function plus() {
//     let counter = 0;
//     return function() {
//         counter++;
//         return counter;
//     };
// }

// const add = plus()
// add()
// add()
// console.log(add())

// function parentFnc(x) {

//     return function childFnc(y) {
//         return x * y;
//     }
// }

// const multiply5 = parentFnc(5);

// console.log(multiply5(3));
// console.log(multiply5(5));


function bankAccount() {
    let balance = 1000; // Private variable

    return {
        deposit: function(amount) {
            balance += amount;
            console.log(`Deposited: $${amount}, New Balance: $${balance}`);
        },
        withdraw: function(amount) {
            if (balance >= amount) {
                balance -= amount;
                console.log(`Withdrew: $${amount}, New Balance: $${balance}`);
            } else {
                console.log("Insufficient funds");
            }
        }
    };
}

const myAccount = bankAccount();
myAccount.deposit(500); // Deposited: $500, New Balance: $1500
myAccount.withdraw(200); // Withdrew: $200, New Balance: $1300
