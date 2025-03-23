function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Zadejte úkol!");
        return;
    }

    let taskList = document.getElementById("taskList");

    let li = document.createElement("li");
    li.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <button class="delete-btn" onclick="deleteTask(this)">❌</button>
    `;

    taskList.appendChild(li);
    taskInput.value = ""; // Vyčistí pole po přidání
}

// Označení úkolu jako hotového
function toggleTask(task) {
    task.parentElement.classList.toggle("completed");
}

// Smazání úkolu
function deleteTask(task) {
    task.parentElement.remove();
}
