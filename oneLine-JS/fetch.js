

fetch('https://api.github.com/users/sujwal19') // api for the get request
    .then(response => response.json())
    .then(data => console.log(data));

