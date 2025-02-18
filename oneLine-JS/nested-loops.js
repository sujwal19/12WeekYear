
for (let i = 0; i <= 10; i++) {
    let row  = "";
    
    for (let j = 0; j <= 10; j++) {
        row += (i * j) + "\t";
    }
    console.log(row);
}