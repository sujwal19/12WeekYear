
// Object Declaration
let user1 = new Object();      // "object constructor" syntax
let user2 = {};                // "object literal" syntax


// #1
// const obj = {
//     name: "Rizwan",
//     dobYear: 1996,
//     isDeveloper: true,
//     hobbies: ["Coding", "Gaming", "Reading"],
//     age: function () {
//         return 2023 - this.dobYear;
//     },
//     address: {
//         city: "Karachi",
//         country: "Pakistan",
//     },
// };

// // console.log(obj.name); // Rizwan
// // console.log(obj.dobYear); // 1996
// // console.log(obj.isDeveloper); // true
// // console.log(obj.hobbies); // ["Coding", "Gaming", "Reading"]
// // console.log(obj.age); // 27
// // console.log(obj.address); // { city: 'Karachi', country: 'Pakistan' }

// // delete obj.isDeveloper; // delete property from object
// // console.log(obj.isDeveloper); // undefined

// // add new property to object

// obj.stacks = ["JavaScript", "React", "Node"];

// // update property value

// obj.name = "Rizwan Ashiq";

// // Can also use bracket notation to access properties

// // console.log(obj["name"]); // Rizwan Ashiq
// // console.log(obj["dobYear"]); // 1996
// // console.log(obj["hobbies"]); // ["Coding", "Gaming", "Reading"]

// obj.address.city = "BTM"

// console.log(obj.address.city); 


// for (let key in obj) {
//     console.log(key);
//     console.log(obj[key]);  
// }

// #2
const obj = {
    name: "Rizwan",
    age: 25,
    city: "Rahim Yar Khan",
};

// console.log(Object.keys(obj)); // [ 'name', 'age', 'city' ]

// Object.keys(obj).forEach((key) => {
//     console.log(obj[key]);                  // same as below for in
// })
 
// for (let key in obj) { 
//     console.log(obj[key]);                   //        ||
// }


// console.log(Object.keys(obj).length === 0);

// console.log(Object.values(obj));           //  [ 'Rizwan', 25, 'Rahim Yar Khan' ]

// console.log(Object.entries(obj)); // [ [ 'name', 'Rizwan' ], [ 'age', 25 ], [ 'city', 'Rahim Yar Khan' ] ]



// const arr = [
//     ["name", "Rizwan"],
//     ["age", 25],
//     ["city", "Rahim Yar Khan"],
// ];
// console.log(Object.fromEntries(arr)); // { name: 'Rizwan', age: 25, city: 'Rahim Yar Khan' }



const obj1 = {
    name: "Rizwan",
    age: 25,
    city: "Rahim Yar Khan",
};

const obj2 = {
    country: "Pakistan",
};

// const obj3 = Object.assign(obj1, obj2);    // same as below

const obj3 = {...obj1, ...obj2};              //      ||

// console.log(obj3); // { name: 'Rizwan', age: 25, city: 'Rahim Yar Khan', country: 'Pakistan' }

// Object.assign() is better cause in shallow copy the problem is, if we have a nested object in the source object, then it will only copy the reference of that nested object. So if we change the nested object in the source object, then it will also change in the target object.


const homeObj = {
    name: "Sujwal",
    age: 21,
    city: "KTM",
};

// Object.seal(homeObj);  // object.seal() => seals an object, no new value can be added, values of existing properties can be changed

// homeObj.country = "Nepal";
// homeObj.name = "Jack";
// delete homeObj.city;
// console.log(homeObj);

// Object.freeze(homeObj);   // its prevent new properties from added and existing properties also cannot be changed. It makes object immutable
// homeObj.country = "Nepal";
// homeObj.name = "Jack";
// delete homeObj.city;    
// console.log(homeObj);


// The Object.preventExtensions() method prevents new properties from ever being added
// Object.preventExtensions(homeObj);
// homeObj.country = "Nepal";
// homeObj.name = "Jack";
// delete homeObj.city;
// console.log(homeObj);

// console.log(Object.isSealed(homeObj))  // false
// check if object is sealed


// console.log(Object.is(undefined, null));  // it determine whether two values are the same value



// The in operator is used to check if an object has a specific property.

// const person = { name: "Sujwal", age: 30 }
// console.log("fName" in person);  // false


//...
// const ingredientsList = ["noodles", { list: ["eggs", "flour", "water"] }];
// const ingredientsListDeepCopy = JSON.parse(JSON.stringify(ingredientsList));
// ingredientsListDeepCopy[0] = "current"

// console.log(ingredientsListDeepCopy);
// console.log(ingredientsList);

//---------------
// How to deep clone in Js----------
// 1. Using Spread Operator to Deep Clone
// 2. Using Object.assign() Method
// 3. Using Json.parse() and Json.stringify() Methods
//-------------
















