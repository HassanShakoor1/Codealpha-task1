function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById('taskList');

    const li = document.createElement('li');
    li.innerHTML = `
        <span onclick="toggleComplete(this)">${taskText}</span>
        <button onclick="removeTask(this)">Remove</button>
    `;

    taskList.appendChild(li);
    taskInput.value = "";
}

function toggleComplete(task) {
    task.parentElement.classList.toggle('completed');
}

function removeTask(button) {
    const task = button.parentElement;
    task.remove();
}
