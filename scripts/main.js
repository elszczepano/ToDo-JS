const addTask = document.querySelector('#addTaskButton');
let newTaskContent = document.querySelector('#task');
const removeButton = document.createElement("button");
const removeButtonContent = document.createTextNode('Remove');
removeButton.classList.add('btn','btn-danger');
removeButton.appendChild(removeButtonContent);

function addNewTask() {
    const removeButton = document.createElement("button");
    const removeButtonContent = document.createTextNode('Remove');
    removeButton.classList.add('btn','btn-danger');
    removeButton.appendChild(removeButtonContent);

    let listItem = document.createElement("li");
    listItem.classList.add('list-group-item','d-flex','justify-content-between','align-items-center');
    let newTask = document.createTextNode(newTaskContent.value);
    listItem.appendChild(newTask);
    listItem.appendChild(removeButton);
    document.querySelector('#taskList').appendChild(listItem);
}

addTask.addEventListener('click', addNewTask);
