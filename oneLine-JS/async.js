// Try Catch
// console.log("heyF");
// try {
//     console.log(hey)
// }
// catch (err) {
//     console.log(err);
// }
// console.log("heyL");

// Async JS - using then
// async function fetchData() {
//     return "Hello, World";
// }

// // Using await
// async function getMessage() {
//     let message = await fetchData();
//     console.log(message);
// }

// getMessage();


// Real-World Use Cases

// 1. Fetching Data from an API

// async function fetchUser() {
//     try {
//         let response = await fetch("http://jsonplaceholder.typicode.com/users/1");
//         let user = await response.json();
//         console.log(user);
//     }
//     catch (error) {
//         console.error("Error fetching user:", error);
//     }
// }
// fetchUser();


// 2. Waiting Before Executing Code

// function delay(ms) {
//     return new Promise(resolve => setTimeout(resolve, ms))
// }
// async function greet() {
//     console.log("Hello");
//     await delay(2000);
//     console.log("World");
// }
// greet();

// 3. Sequential API Calls(Dependent on Each Other)

// async function getUserAndPosts() {
//     let user = await fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json());
//     let posts = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`).then(res => res.json());
//     console.log(user, posts);
// }
// getUserAndPosts();


// 4. Parallel API Calls
// async function fetchMultiple() {
//     let [user, posts] = await Promise.all([
//         fetch("https://jsonplaceholder.typicode.com/users/1").then(res => res.json()),
//         fetch(`https://jsonplaceholder.typicode.com/posts?userId=1`).then(res => res.json()),
//     ])
//     console.log(user, posts);
// }
// fetchMultiple();


// async function getRandomUser(){
//     // try {
//     //     let response = await fetch("https://randomuser.me/api/")
//     //     let user = await response.json()
//     //     console.log(user);
//     // } 
//     // catch (error) {
//     //     console.log("ERROR: ", error)
//     // }

// }
// console.log(getRandomUser())


// function sayHello() {
//     return new Promise(res => {
//         setTimeout(function(){
//             res("Hello, World");
//         }, 2000);
//     });
// }

// sayHello().then(console.log)

// Think of setTimeout() like setting an alarm.

// You set an alarm (setTimeout) for 2 seconds.
// But your function doesn’t wait for the alarm; it finishes immediately.
// So, nothing is returned, and .then(console.log) has nothing to work with.


// ----------------- 2nd ----------------------

// https://jsonplaceholder.typicode.com/todos/1

// async function fetchData() {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/todos/1");
//         if (!response.ok) throw new Error("Fetch failed");
//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.error("ERROR: ", error.message);
//     }
// }
// fetchData();


// // 3rd -----------------------------------------
// async function getUserAndPosts() {
//     try {
//         const userResponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
//         if (!userResponse.ok) throw new Error("Fetch Failed");
//         const user = await userResponse.json()
//         console.log("User: ", user);

//         const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`);
//         if (!postsResponse.ok) throw new Error("Fetch Failed");
//         const posts = await postsResponse.json()
//         console.log("Posts:", posts);

//     } catch (error) {
//         console.log('ERROR: ', error.message)
//     }
// }
// getUserAndPosts();
// 🔹 Ask yourself: "Am I fetching the right data?" ✅
// 🔹 Avoid hardcoding values—use user.id dynamically instead of "1". ✅
// 🔹 Always check API documentation before using it. 💡



// 4th ----------------------------------------------------

async function fetchWithRetry(url, retries = 3, delay = 1000) {
    let response;

    for (let i = 0; i < retries; i++) {
        try {
            response = await fetch(url);
            if(response.ok) {
                return await response.json();
            }
        } catch (err) {
            console.log(`Attempt ${i + 1} failed`, err);
        }

        if (i < retries) {
            await new Promise(reslove => setTimeout(reslove, delay));
        }

    }
    throw new Error("All retries failed");
}

fetchWithRetry("https://jsonplaceholder.typicode.com/todos/1")
.then( res => console.log("Final Response: ", res) )
.catch( err => console.log("Final Error: ", err) )




// #5
// async function fetchData() {
//     try {
//         const fetchUser = fetch("https://jsonplaceholder.typicode.com/users/1")
//         .then( response => response.json())
    
//         const fetchPosts = fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
//         .then( response => response.json() )
    
//         const [user, posts] = await Promise.all([ fetchUser, fetchPosts ])
    
//         console.log("User: ", user);
//         console.log("Posts: ", posts);  
//     } 
//     catch (error) {
//         console.log("ERROR: ", error);
//     }
// }
// fetchData();


// const myPromise = new Promise((res, rej) => {
//     const isSuccessful = false;

//     if (isSuccessful) {
//         res('Operation was successful')
//     }
//     else {
//         rej("Operation Failed")
//     }
// })
// .then( (data) => {
//     console.log(data);
// })
// .catch( (error) => {
//     console.log(error);
// } )


// const promise1 = fetch("https://jsonplaceholder.typicode.com/todos/1")
// .then( response => response.json() );


// const promise2 = fetch("https://jsonplaceholder.typicode.com/todos/2")
// .then(response => response.json() )


// Promise.all([promise1, promise2])
// .then(results => {
//     console.log(results);
// })
// .catch( error => {
//     console.error("Error:", error);
// })

























