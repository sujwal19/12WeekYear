let sum = 0
for (let i = 0; i <= 100; i++) {
    if (i % 3 == 0 || i % 5 == 0){
        sum += i;
    }
}

console.log("The sum of multiple of 3 and 5 between 1 and 100", sum);


