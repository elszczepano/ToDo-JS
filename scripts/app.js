const addTask = document.querySelector('#addTaskButton');
const list = document.querySelector('#taskList');
let myTasks = [];
let lastKey = 0;
function loadTasksFromStorage() {
  myTasks = [];
  for (let key in localStorage) {
  myTasks[key] = localStorage.getItem(key);
  lastKey = key;
  }
  loadTasks();
}
function showTasks(task, index) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `<div class="input-group">
  <input type="text" class="form-control"a value="${task}" readonly>
  <span class="input-group-btn">
    <button class="btn btn-danger"  type="button">Remove</button>
  </span>
  </div>`;
  list.appendChild(listItem);

  let removeButton = listItem.querySelector('.btn-danger');
  removeButton.addEventListener('click',function(){
    removeTask(this);
    delete myTasks[index];
    localStorage.removeItem(index);
  });
}

function loadTasks() {
  document.querySelector('#taskList').innerHTML="";
  myTasks.forEach(function(task, index){
    showTasks(task, index);
  });
}

function addNewTask() {
    let newTaskContent = document.querySelector('#task');
    if(newTaskContent.value=='') {
      alert('Field cannot be empty!');
    }
    else {
      localStorage.setItem(++lastKey, newTaskContent.value);
      myTasks.push(newTaskContent.value);
      newTaskContent.value = "";
      loadTasks();
    }
}

function removeTask(task) {
  let toRemove = task.closest('li');
  task.closest('ul').removeChild(toRemove);
}

document.addEventListener('DOMContentLoaded',loadTasksFromStorage);
addTask.addEventListener('click', addNewTask);
