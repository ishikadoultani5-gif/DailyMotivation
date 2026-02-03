// Get elements
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const list = document.getElementById("taskList");

// Load saved tasks on page load
window.onload = function () {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => addTaskToUI(task));
};

// Add button click
addBtn.addEventListener("click", function () {
  const taskText = input.value.trim();
  if (taskText === "") return;

  addTaskToUI(taskText);
  saveTask(taskText);

  input.value = "";
});

// Add task to UI
function addTaskToUI(taskText) {
  const li = document.createElement("li");
  li.textContent = taskText;

  // Delete on click
  li.addEventListener("click", function () {
    li.remove();
    removeTask(taskText);
  });

  list.appendChild(li);
}

// Save task
function saveTask(taskText) {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Remove task
function removeTask(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter(t => t !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}
