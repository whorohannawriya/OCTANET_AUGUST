const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", addTask);

function addTask() {
    const taskText = taskInput.value;
    if (taskText) {
        const taskItem = document.createElement("li");
        taskItem.innerHTML = `
            <span>${taskText}</span>
            <button class="deleteBtn">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = "";

        const deleteBtn = taskItem.querySelector(".deleteBtn");
        deleteBtn.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });
    }
}
