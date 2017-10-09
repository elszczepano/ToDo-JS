const addTask = document.querySelector('#addTaskButton');
const list = document.querySelector('#taskList');
let lastKey = 0;
function showTasks(key) {
  let listItem = document.createElement("li");
  listItem.innerHTML = `<div class="input-group">
  <input type="text" class="form-control"a value="${localStorage.getItem(key)}" readonly>
  <span class="input-group-btn">
    <button class="btn btn-danger"  type="button">Remove</button>
  </span>
  </div>`;
  list.appendChild(listItem);
  let removeButton = listItem.querySelector('.btn-danger');
  removeButton.addEventListener('click',function(){
    removeTask(this);
    localStorage.removeItem(key);
  });
}
function loadTasks() {
  document.querySelector('#taskList').innerHTML="";
  for (let key in localStorage) {
  localStorage.getItem(key);
  showTasks(key);
  lastKey = key;
  }
}
function addNewTask() {
    let newTaskContent = document.querySelector('#task');
    if(newTaskContent.value=='') {
      alert('Field cannot be empty!');
    }
    else {
      localStorage.setItem(++lastKey, newTaskContent.value);
      newTaskContent.value = "";
      loadTasks();
    }
}
function removeTask(task) {
  let toRemove = task.closest('li');
  task.closest('ul').removeChild(toRemove);
}
document.addEventListener('DOMContentLoaded',loadTasks);
addTask.addEventListener('click', addNewTask);
