// Reverse an Array
const arr1 = [1, 2, 3, 4, 5]
const arr2 = []

for (let i = arr1.length - 1; i >= 0; i--) {
     arr2.push(arr1[i]);
}
console.log("Reversed Array:", arr2);


// Reverse an Array (In-Place Reversal)

// const arr = [1, 2, 3, 4, 5];

// let left = 0;
// let right = arr.length - 1;

// while (left < right) {
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;

//     left++;
//     right--;
// }

// console.log(arr);


