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
//     return inner();
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
// // counter.increment();
// // counter.reset();


// const counter = (function (){
//     let count = 0;

//     return {
//         increment: function(){
//             count++;
//             console.log(count);
//         },
//         reset: function() {
//             count = 0;
//             console.log(count);
//         }
//     }
// })();

// counter.increment()
// counter.increment()
// counter.reset()
// counter.increment()


// Closure and setTimeout

// function createTimer() {
//     for (let i = 0; i <= 5; i++){
//         setTimeout( () => {
//             console.log(`Timer: ${i}`)
//         }, 1000)
//     }
// }
// createTimer()


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




// function bankAccount() {
//     let balance = 1000   // Private variable

//     return {
//         deposit: function(amount) {
//             balance += amount;
//             console.log(`Deposited $${amount}, New Balance: $${balance}`);
//         },
//         withdraw: function(amount){
//             if (balance >= amount){
//                 balance -= amount;
//                 console.log(`Withdraw $${amount}, New Balance: $${balance}`);
//             }
//             else {
//                 console.log("Insufficient Funds");
//             }
//         }
//     }
// }

// const myAccount = bankAccount()
// myAccount.deposit(2000);
// myAccount.withdraw(500);
// myAccount.withdraw(1500);
// myAccount.withdraw(1000);
// myAccount.withdraw(0);
// myAccount.deposit(2500);



// function x(){
//     var a = 7;
//     // return function y(){                // 2.  both are same 1 and 2
//     //     console.log(a);    
//     // }
//     function y(){
//         console.log(a);
//     }
//     a = 100;
//     return y;                       // 2.  both are same 1 and 2
// }

// var z = x();
// console.log(z);
// z();


// function z(){
//     function x(){
//         var a = 7;
//         function y(){
//             console.log(a);
//         }
//         y()                 
//     }
//     x()
// }
// z();


// function z(){
//     let a = 7;

//     a = 100;
//     a = 300;
//     return function y(){
//         console.log(a);
//     }
// }

// var x = z()
// var g = z()
// x()
// g()


// closure object
// function z(){
//     let obj = { value: 7 };

//     obj.value = 100;
//     return function y(){
//         console.log(obj.value);
//     }
//     obj.value = 300;  // Dead code
// }

// var x = z();
// var g = z();

// x();  // Prints 100
// g();  // Prints 100

// // But modifying after function execution:
// x().value = 500;
// g();  // Would now print 500


// object closure
// function z(){
//     let obj = { value: "Bheem" }

//     obj.value = "Ujjwal"
//     return {
//         print: function(){ console.log(obj.value); },
//         changeValue: function(val) { obj.value = val; }

//     }
// }

// var x = z()
// var g = z()

// x.print()
// g.print()

// x.changeValue("Sujwal")
// g.changeValue("Sujwal")

// x.print()
// g.print()


// function z(){
//     let arr = ["Mango", "Apple", "Banana"];

//     let a = 6;
//     arr = [1, 2, 3, a];

//     return {
//         print: function() {
//             console.log(arr);
//          },
//         changeArr: function(arrayVal) { arr = arrayVal },
//     }
// }

// var x = z();
// var g = z();

// x.print()
// g.print()

// x.changeArr(["Sujwal", "Ujjwal", "Bheem", ])

// x.changeArr(["Classic", "RTR", "MT15"])

// x.print()
// g.print()


// Write a closure that increments a counter each time it is called. This will help solidify your understanding of closures.
// function z(){
//     let count = 0;

//     return function(){
//         count++;
//         return count;
//     }
// }

// var g = z();
// console.log(g());
// console.log(g());
// console.log(g());


/// ----------------------------- 
// function z(){
//     let count = 0;

//     function y(){
//         count++;
//         console.log(count);
//     }
//     return y;
// }

// let g = z()
// g()
// g()
// g()


// -----------------------------------
