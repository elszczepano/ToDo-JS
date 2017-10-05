const addTask = document.querySelector('#addTaskButton');
let newTaskContent = document.querySelector('#task');
const removeButton = document.createElement("button");
const removeButtonContent = document.createTextNode('Remove');
removeButton.classList.add('btn','btn-danger');
removeButton.appendChild(removeButtonContent);

function addNewTask() {


    let listItem = document.createElement("li");
    listItem.classList.add('list-group-item','d-flex','justify-content-between','align-items-center');
    if(newTaskContent.value=='') {
      alert('Task cannot be empty!');
    }
    else {
      let newTask = document.createTextNode(newTaskContent.value);
      listItem.appendChild(newTask);
      document.querySelector('#taskList').appendChild(listItem);
      const removeButton = document.createElement("button");
      const removeButtonContent = document.createTextNode('Remove');
      removeButton.classList.add('btn','btn-danger');
      removeButton.appendChild(removeButtonContent);
      listItem.appendChild(removeButton);
    }
}
function removeTask() {

}
addTask.addEventListener('click', addNewTask);
removeTask.addEventListener('click', addNewTask);
