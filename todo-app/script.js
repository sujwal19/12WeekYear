const taskInput = document.getElementById("task-input");
const addTaskBtn = document.getElementById("add-task");
const taskList = document.getElementById("task-list");

// Load tasks from Local storage
document.addEventListener("DOMContentLoaded", loadTasks);

function loadTasks() {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => createTaskElement(task));
}

// Add task function
function addTask(){

    if (taskInput.value.trim() === "") return;

    createTaskElement(taskInput.value);

    // Save to local storage
    saveTask(taskInput.value);

    taskInput.value = "";
}

// Create task element
function createTaskElement(taskText) {
    const li = document.createElement("li");
    li.innerHTML = `${taskText} <button class="delete-btn">X</button>`;
    taskList.appendChild(li);

    // Delete task
    li.querySelector(".delete-btn").addEventListener("click", function(){
        li.remove()
        removeTask(taskText);
    });
}

// Save task to Local storage
function saveTask(task) {
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove task from Local storage
function removeTask(task) {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks = tasks.filter(t => t !== task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


// Event listener for adding tasks
addTaskBtn.addEventListener("click", addTask);

taskInput.addEventListener("keypress", function(event){
    if (event.key === "Enter") {
        addTask();
    }
});