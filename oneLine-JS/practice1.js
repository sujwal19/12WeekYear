// Reverse a Number or a String
// function reverseNum(n){
//     n = n + "";
//     return n.split("")
//     .reverse()
//     .join("");
// }

// console.log(Number(reverseNum(12345)));
// // console.log(reverseNum("hello"));


function reverse_a_number(num){
    let reversed_num = 0;

    while (num !== 0){
        reversed_num = reversed_num * 10 + num % 10;
        num = Math.floor(num / 10);
    }
    return reversed_num;
}

const num = 123456;
console.log("Original number: " + num);
const result = reverse_a_number(num);
console.log("Reversed number: " + result);



