const addTask = document.querySelector('#addTaskButton');
//temporary solution
let myTasks = ['To jest','Task','wasz'];

const removeButton = document.createElement("button");
const removeButtonContent = document.createTextNode('Remove');
removeButton.classList.add('btn','btn-danger');
removeButton.appendChild(removeButtonContent);
function loadTasks() {
  myTasks.forEach(function(element){
    showTasks(element);
  });
}
function showTasks(task) {

  let listItem = document.createElement("li");
  listItem.classList.add('list-group-item','d-flex','justify-content-between','align-items-center');
  let newTask = document.createTextNode(task);
  listItem.appendChild(newTask);
  listItem.appendChild(removeButton);
  document.querySelector('#taskList').appendChild(listItem);

}

function addNewTask() {
    let newTaskContent = document.querySelector('#task');
    if(newTaskContent.value=='') {
      alert('Field cannot be empty!');
    }
    else {
      myTasks.push(newTaskContent.value);
    }
}

document.addEventListener('DOMContentLoaded',loadTasks);
addTask.addEventListener('click', addNewTask);
