
const toggleButton = document.querySelector("#toggleButton")

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")){
        toggleButton.textContent = "Enable Light Mode";
    } else {
        toggleButton.textContent = "Enable Dark Mode";
    }
})

// Check localStorage for mode preference on page load
// document.addEventListener("DOMContentLoaded", () => {
//     if (localStorage.getItem("darkMode") === "enabled") {
//         document.body.classList.add("dark-mode");
//         toggleButton.textContent = "Enable Light Mode";
//     }
// });

// toggleButton.addEventListener("click", () => {
//     document.body.classList.toggle("dark-mode");
//     if (document.body.classList.contains("dark-mode")) {
//         localStorage.setItem("darkMode", "enabled");
//         toggleButton.textContent = "Enable Light Mode";
//     } else {
//         localStorage.setItem("darkMode", "disabled");
//         toggleButton.textContent = "Enable Dark Mode";
//     }
// });
