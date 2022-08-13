const todoForm = document.querySelector("#todo-form");
const todoInput = todoForm.querySelector("input");
const todoList = document.querySelector("#todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveTodos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveTodos();
}

function paintTodo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  li.classList.add("li-list");
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.classList.add("li-button");
  button.addEventListener("click", deleteTodo);
  button.innerText = "delete";
  li.appendChild(span);
  li.appendChild(button);
  todoList.appendChild(li);
}

function makeTodo(event) {
  event.preventDefault();
  const newTodo = todoInput.value;
  todoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveTodos();
}

todoForm.addEventListener("submit", makeTodo);

const remainTodos = localStorage.getItem(TODOS_KEY);

if (remainTodos !== null) {
  const parsedTodo = JSON.parse(remainTodos);
  toDos = parsedTodo;
  parsedTodo.forEach(paintTodo);
}
