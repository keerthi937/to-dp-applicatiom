// Load tasks on page load
window.onload = function () {
  loadTasks();
};

function addTask() {
  let taskInput = document.getElementById("taskInput");
  let task = taskInput.value.trim();

  if (task === "") return;

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.push(task);
  localStorage.setItem("tasks", JSON.stringify(tasks));

  taskInput.value = "";
  loadTasks();
}

function deleteTask(index) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.splice(index, 1);
  localStorage.setItem("tasks", JSON.stringify(tasks));
  loadTasks();
}

function loadTasks() {
  let taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task, index) => {
    let li = document.createElement("li");
    li.className = "list-group-item d-flex justify-content-between align-items-center bg-light text-dark mb-2";

    li.innerHTML = `
      <span>🧸 ${task}</span>
      <button class="btn btn-sm btn-danger" onclick="deleteTask(${index})">Delete ❌</button>
    `;
    taskList.appendChild(li);
  });
}
