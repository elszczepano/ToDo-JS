const addTask = document.querySelector('#addTaskButton');
//temporary solution
let myTasks = ['To jest','Task','wasz'];

function loadTasks() {
  myTasks.forEach(function(task){
    showTasks(task);
  });
}
function showTasks(task) {

  let listItem = document.createElement("li");
  listItem.innerHTML = `<div class="input-group">
  <input type="text" class="form-control" id="task" value="${task}" readonly>
  <span class="input-group-btn">
    <button class="btn btn-danger" id="addTaskButton" type="button">Remove</button>
  </span>
  </div>`;
  document.querySelector('#taskList').appendChild(listItem);
  // let newTask = document.createTextNode(task);
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
