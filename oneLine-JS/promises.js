// ------------------- Promises ----------------------- //

// var ans = new Promise((res, rej) => {
//     if (false){
//         return res();
//     }
//     else{
//         return rej();
//     }
// })
// ans.then(function(){
//     console.log("resolve");
// })
// .catch(function(){
//     console.log("reject")
// })


// var ans = new Promise((res, rej) => {
//     var n = Math.floor(Math.random() * 10)
//         if( n < 5){
//             console.log(n);
//             return res();
//         }
//         else{
//             console.log(n);
//             return rej();
//         }
//     })
//     ans.then(function(){
//         console.log("Below");
//     })
//     .catch(function(){
//         console.log("Above");
//     })


// var ans = new Promise((res, rej) => {
//     res("Room Aao");
// })

// var p2 = ans.then(function(data){
//     console.log(data);
//     return new Promise((res, rej) => {
//         res("bike park gara ani gate lagau");
//     })
// })

// var p3 = p2.then(function(data){
//     console.log(data);
//     return new Promise((res, rej) => {
//         res("Khana pakau ani khana khau");
//     })
// })

// var p4 = p3.then(function(data){
//     console.log(data);
//     return new Promise((res, rej) => {
//         res("Coding gara");
//     })
// })

// var p5 = p4.then(function(data){
//     console.log(data);
//     return new Promise((res, rej) => {
//         res("Suta");
//     })
// })

// p5.then(function(data){
//     console.log(data);
// })



// Promises #1

// let ans = new Promise((res, rej) => {
//     let num = Math.floor(Math.random() * 10 + 1)
//     console.log(num);
    

//     if (num > 5){
//         res("Higher Value")
        //    return res()
//     }
//     else{
//         rej("Lower value")
        //    return rej();
//     }
// })
// ans.then(function(data){
//     console.log(data);
// })
// .catch(function(error){
//     console.log(error);
// })


// ------------------------------------------------------------


// Promise #2

// let command = new Promise((res, rej) => {
//     res("Go home by bike");
// })

// let p2 = command.then(function(data){
//     console.log(data);
//     return new Promise((res, rej) => {
//         res("Gate khola bike park gara");
//     })
// })

// let p3 = p2.then(function(data){
//     console.log(data);
//     return new Promise((res, rej) => {
//         res("Gate lagau ani mathi jau");
//     })
// })

// let p4 = p3.then(function(data){
//     console.log(data);
//     return new Promise((res, rej) => {
//         res("Khana pakau ani khana khau");
//     })
// })

// let p5 = p4.then(function(data){
//     console.log(data);
//     return new Promise((res, rej) => {
//         res("computer chalau");
//     })
// })

// let p6 = p5.then(function(data){
//     console.log(data);
//     return new Promise((res, rej) => {
//         res("Suta")
//     })
// })
// .then(function(data){
//     console.log(data);
// }).catch(function(error){
//     console.log(error);
// })



