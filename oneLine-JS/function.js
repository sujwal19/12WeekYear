

// Higher Order Function

// function fun() {
//     console.log("Hello");
// }
// function fun2(action) {
//     action();
//     action();
// }
// fun2(fun);
//...................

// Popular Higher Order Function

const n = [1, 2, 3, 4, 5];
// const square = n.map((num) => num * num);
// console.log(square);



// ... Advanced Techniques with Higher Order Functions ...

// 1. Function Composition
// function add(x){
//     return x + 2;
// }

// function mul(x){
//     return x * 3;
// }

// function compose(f, g) {
//     return function(x) {
//         return f(g(x));
//     }
// }
// var res = compose(add, mul)(4);
// console.log(res);



// 2. Currying
// function mul(x){
//     return function (y){
//         return x * y;
//     }
// }
// var mul = mul(5);
// console.log(mul(3));


// Memoization
function memoize(func) {
    var cache = {};
    return function (arg) {
        if (cache[arg]) {
            return cache[arg];
        } else {
            var res = func(arg);
            cache[arg] = res;
            return res;
        }
    };
}
function slow(num) {
    console.log("Computing...");
    return num * 2;
}

var fast = memoize(slow);
console.log(fast(5)); // Computing... 10
console.log(fast(5)); // 10 (cached)