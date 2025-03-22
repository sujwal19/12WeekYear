
// 2 method to create a array
// let nobleGases = [ "He", "Ne", "Ar", "Kr", "Xn"]
// console.log(nobleGases);

// let nobleGases2 =  Array ("He", "Ne", "Ar", "Kr", "Xn");
// console.log(nobleGases2);

// nobleGases2[5] = "Rn";
// console.log(nobleGases2)

// console.log(nobleGases2.length);

// -------------------------------------------
// let elements = [ [ [ 'H', 'Li', 'Na' ], [ 'Be', 'Mg' ] ], [ [ 'B', 'Al' ], [ 'C', 'Si' ] ] ]

// console.log(elements[0]);        // [ [ 'H', 'Li', 'Na' ], [ 'Be', 'Mg' ] ]
// console.log(elements[0][0]);     // [ 'H', 'Li', 'Na' ]
// console.log(elements[0][0][0]);  // H

// console.log(elements[1]);        // [ [ 'B', 'Al' ], [ 'C', 'Si' ] ]
// console.log(elements[1][1]);     // [ 'C', 'Si' ]
// console.log(elements[1][1][1]);  // Si

// -------------------------------------------------------------

// Sparse Array
// let firstGroup = ['H', 'Li', 'Na',, 'K', 'Rb', 'Cs'];

// firstGroup.length = 11;
// console.log(firstGroup);

// firstGroup[15] = 'Fr';

// console.log(firstGroup)

// -----------------------------------------------------------

// ------ Empty Slots ------
// const colors = ["red", "yellow", "blue"];

// colors[5] = "purple";

// colors.forEach((item, index) => {
//   console.log(`${index}: ${item}`);
// });

// // Output:
// // 0: red
// // 1: yellow
// // 2: blue
// // 5: purple

// colors.reverse(); // ['purple', empty × 2, 'blue', 'yellow', 'red']
// console.log(colors);

// 
// const colors = ["red", "yellow", "blue"];
// colors[5] = "purple";

// const iterator = colors.keys();

// for (const key of iterator) {
//   console.log(`${key}: ${colors[key]}`);
// }


// Comparing Arrays

//-------
// let dough1 = ['flour', 'water', 'yeast', 'salt']
// let dough2 = ['flour', 'water', 'yeast', 'salt']

// console.log(dough1 == dough2)  // False

// console.log([] === []);   // False
// console.log(Array() === Array());  // False
// this happens because object references are compared, and not their actual content. And each time you create a new array object, it will have a different reference in memory.this happens because object references are compared, and not their actual content. And each time you create a new array object, it will have a different reference in memory.

// -------
// let gough1 = ['flour', 'water', 'yeast', 'salt']
// let gough2 = gough1

// console.log(gough1 === gough2)  // true becasue both have same reference


// Only way to compare the value of two arrays
// const compareArr = (arr1, arr2) => {
//     if (arr1.length !== arr2.length) {
//         return false
//     }

//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] !== arr2[i]) {
//             return false
//         }        
//     }
//     return true
// }

// let dough1 = ['flour', 'water', 'yeast', 'salt']
// let dough2 = ['flour', 'water', 'yeast', 'salt']

// console.log(compareArr(dough1, dough2));


// ----------------- To copy nested arrays ---------------
// let metal1 = [['Li', 'Na', 'K'], ['Be', 'Mg', 'Ca']];
// let metal2 = [['Li', 'Na', 'K'], ['Be', 'Mg', 'Ca']];

// const compareNested = (arr1, arr2) => {

//     if  (arr1.length !== arr2.length) return false;

//     for (let i = 0; i < arr1.length; i++) {
//         for (let j = 0; j < arr1[i].length; j++) {
//             if ( arr1[i][j] !== arr2[i][j] ){
//                 return false
//             }
//         }
//     }
//     return true;
// }

// const nestedResult = compareNested(metal1, metal2);
// console.log(nestedResult);


// To compare two arrays of objects

// let albums1 = [
//     {artist: 'Frank Zappa', title: 'Over-Nite Sensation', year: 1973},
//     {artist: 'Frank Zappa', title: 'Apostrophe', year: 1974},
//     {artist: 'Frank Zappa', title: 'One Size Fits All', year: 1975}
// ];
// let albums2 = [
//     {artist: 'Frank Zappa', title: 'Over-Nite Sensation', year: 1973},
//     {artist: 'Frank Zappa', title: 'Apostrophe', year: 1974},
//     {artist: 'Frank Zappa', title: 'One Size Fits All', year: undefined},
// ];

// const compareArrObj = (arr1, arr2) => {

//     if (arr1.length !== arr2.length) return false;

//     for (let i = 0; i < arr1.length; i++) {
//         // console.log(Object.keys(arr1[0]));
//         if (Object.keys(arr1[i]).length !== Object.keys(arr2[i]).length) {
//             return false
//         }

//         for (let prop in arr1[i]) {
//             // console.log(arr2[i][prop]);    
//             if(arr1[i][prop] !== arr2[i][prop]){
//                 return false;
//             }
//         }

//     }
//     return true;
// }

// console.log(compareArrObj(albums1, albums2))  // false

// albums2[2]['year'] = 1975;
// console.log(compareArrObj(albums1, albums2));  // true


//----------------------------------------------------
// merged in one array
// let fruits = ["Mango", "Apple", "Banana"]
// let veggies = ["sag", "vindi", "lauka"]

// let fruggies = [...fruits, ...veggies]
// console.log(fruggies);

// Copy an array with the spread operator
// let fruggiesCopy = [...fruggies]
// console.log(fruggies);

// REST Parameter
// #1 ---
// function f1(a, b, c, ...d){
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(d);
//     console.log(Array.isArray(d))  // true
// }
// f1(2, 4, 6, 8, 10, 12, 14, 16, 18);

// #2
// function f2(...args) {
//     console.log(":", args);
// };

// f2("hey", "hello", "world")
// f2(1, 2, 3, 4, 5)


// Destructring

// let nobleGlasses = [ "Hey", "Hello", "World","Bye", "Go", "Fast"]

// // You can skip array elements and go to the next ones by typing more than one comma between each variable name.
// // let [a, ,b, c, ...d] = nobleGlasses;

// let [a, ,b, c, ...d] = nobleGlasses;
// let [e, ...f] = d;

// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);

// console.log(e);
// console.log(f);


// Commom Array Methods

// let sibling = ["Bheem", "Ujjwal", "Sujwal", "Ramesh"];
// sibling[4] = "Anisha";

// sibling.push("Bhawana", "Muna", "Alisha", "Anusha");
// You can append multiple elements with push(), indicating their values separated by a comma.
// console.log(sibling);

// sibling.unshift("Bhawana", "Chanda", "Muna")
// adds one or more elements to the beginning of an array and returns the length of the modified array.
// console.log(sibling);

// sibling.pop()    // remove last one element
// sibling.shift()  // remove first one element
// console.log(sibling);
// ................................................................................
// let sibling = ["Bheem", "Ujjwal", "Sujwal", "Ramesh", "Bhawana", "Rohan", "Muna"];

// sibling.splice(2, 3);  // splice(start index, no. of items to remove)
// console.log(sibling);

// splice() => you can add element too

// sibling.splice(3, 3, "Anisha", "Chanda")     //this willl be inserted in indicated position
// console.log(sibling);

// sibling.splice(3, 0, "Anisha", "Chanda")  // use 0 as second arguement to add element at index without removing element,
// console.log(sibling);

//-------------------------------------------------------------------

// How to Combine Arrays

// CONCAT VS SPREAD
// When the argument is not an array, concat adds it as a whole, while ... tries to iterate it and fails if it can't. Consider:
// a = [1, 2, 3]
// x = 'hello';
// console.log(a.concat(x));  // [ 1, 2, 3, 'hello' ]
// console.log([...a, ...x]); // [ 1, 2, 3, 'h', 'e', 'l', 'l', 'o' ]


// Use concat() Method
// You need to call .concat() on the array that should come first, passing as arguments the arrays you want it to merge with.
// concat doesnot change the original arrays
// let fruits = ["Mango", "Apple", "Banana"]
// let veggies = ["sag", "vindi", "lauka"]
// let drinks = ["sprite", "coca", "dew"]

// let fruggink = veggies.concat(fruits, drinks)
// console.log(fruggink);

// how to use push() method with spread operator
// note: this change the original array
// fruits.push(...veggies);


// fruits.splice(0, 0, ...veggies);          // same as below line
// fruits.unshift(...veggies, ...drinks);                 //

// fruits.push(...veggies, ...drinks)                     // same as below line
// fruits.splice(fruits.length, 0, ...veggies, ...drinks);            //

// console.log(fruits);
//------------------------------------------------------------------------


// Convert an Array into a String  //--------------------------
// following methods do not mutate the original array


// let fruits = ["Mango", "Apple", "Banana"];
// let fruitConvert = fruits.toString();

// console.log(fruitConvert);  // Mango,Apple,Banana

// // let fruitString = fruits.join(", ")     // Mango, Apple, Banana
// // let fruitString = fruits.join(" * ")    // Mango * Apple * Banana
// // let fruitString = fruits.join("")          // MangoAppleBanana
// let fruitString = fruits.join(" ")          // Mango Apple Banana
// // console.log(fruitString);

//................................................................
// let arr = [1, 'two', null, undefined, true, {}];

// arr.toString();            // '1,two,,,true,[object Object]'
// let abc = arr.join(" ")
// console.log(abc);          // 1, two, , , true, [object Object]


// If you want to convert an array containing objects into a string, the JSON.stringify() method is what you need.
// let a = JSON.stringify(arr)   
// console.log(a);                   // [1,"two",null,null,true,{}]
//...........................................................


// let fruits = ["Mango", "Apple", "Banana"];

// let a = JSON.stringify(fruits)    // in stringify(), nulll === undefined
// console.log(a);                   // ["Mango","Apple","Banana"]



//-----------------------------------------------------------------------
// How to Compare Arrays

// converting in strings to compare
// let a = [1, null, 3];
// let b = [1, undefined, 3];

// console.log(a[1] === b[1]);  // false

// console.log(JSON.stringify(a) === JSON.stringify(b));   // true

// In light of this aspect, it would be better to use an iterative technique off above(|)


// every() Method

// let fruits = ["Mango", "Apple", "Banana"];
// let veggies = ["Mango", "Apple", "Banana"];

// const compareEvery = (arr1, arr2) => {
//     return arr1.length === arr2.length &&
//     arr1.every( (elem, index) => {
//         elem === arr2[index];;
//     } )
// }

// console.log(compareEvery(fruits, veggies))
// console.log(compareEvery(a, b))    // reference from above

const ages = [21, 18, 20, 23];

function checkAges(age){
    return age > 18;
}
// console.log(ages.every(checkAges));

//------------------------------------------------------------------------


// How to copy and Array
// slice() => allows to copy without mutating the code

// let fruits = ["Mango", "Apple", "Banana", "Pineapple", "Grapes"];

// // let fruitsCopy = fruits.slice()  // when called without arguements, slice() create a duplicate of the whole array
// let fruitsCopy = fruits.slice(1, 5);
// console.log(fruitsCopy);

// ----------------------------------------------------------------
// If you handle an array containing non-primitive values, Now, albumsCopy represents a shallow copy of albums and the elements inside each array point to the same objects. In other words, both albums[0] === albumsCopy[0] and albums[1] === albumsCopy[1] return true – remember that this comparison involves object references – because they are the very same objects.

// let albums = [
//     {artist: 'Frank Zappa', title: 'Apostrophe'},
//     {artist: 'Frank Zappa', title: 'One Size Fits All'}
// ];

// let albumsCopy = albums.slice()


// albumsCopy[1]['title'] = "Absollutelly Free";

// console.log(albums);
// console.log(albumsCopy);

// Note that if you reassign an element to a different object – that is without mutating any of the existent objects – the modification does not involve the other array:Note that if you reassign an element to a different object – that is without mutating any of the existent objects – the modification does not involve the other array:
// albumsCopy[1] = { artist: 'Captain Beefheart', title: "Safe as Milk" }

// console.log(albums);
// console.log(albumsCopy);

// see this slice more clearly,, join and other imp, do examples, slice confusing sollve
// currently in map() method


// -----------------------------

//map() Method


// let albums = [
//     {artist: 'Frank Zappa', title: 'Apostrophe'},
//     {artist: 'Frank Zappa', title: 'One Size Fits All'}
// ];

// let mapAlbums = albums.map( element => element );
// console.log(mapAlbums);

//...
let arr = [3, 4, 5, 6];

// for (let i = 0; i < arr.length; i++){
//     arr[i] = arr[i] * 3;
// }
// console.log(arr);

// let modifiedArr = arr.map(function (element) {
//     return element * 3;
// });

// console.log(modifiedArr);


let users = [
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
];

let usersMap = users.map( (elem) => {
    return `${elem.firstName} ${elem.lastName}`;
} )

console.log(usersMap);







