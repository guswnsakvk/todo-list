const icon = document.querySelector(".material-icons")
const container = document.querySelector(".todo .container")

icon.addEventListener("click", function() {
  container.classList.toggle("hidden")
})

const todoForm = document.querySelector("#todo-form")
const todoInput = todoForm.querySelector("input")
const toDoList = document.getElementById("todo-list")

const TODOS_KEY = "todos"

let toDos = []

function handleToDoSubmit(event){
  event.preventDefault()
  const newTodo = todoInput.value
  todoInput.value = ""
  const newTodoObj = {
    text: newTodo,
    id: Date.now()
  }
  toDos.push(newTodoObj)
  paintToDo(newTodoObj)
}

function paintToDo(newTodo){
  const li = document.createElement("li")
  li.id = newTodo.id
  const span = document.createElement("span")
  span.innerHTML = newTodo.text
  const cancelButton = document.createElement("span")
  cancelButton.innerText = "❌"
  cancelButton.addEventListener("click", deleteToDo)
  const okayButtom = document.createElement("span")
  okayButtom.innerText = "⭕"
  okayButtom.addEventListener("click", doneToDo)
  //const button = document.createElement("button")
  //button.innerText = "❌"
  //button.addEventListener("click", deleteToDo)
  li.appendChild(span)
  li.appendChild(cancelButton)
  li.appendChild(okayButtom)
  //li.appendChild(button)
  toDoList.appendChild(li)
}

function doneToDo(event){
  const li = event.target.parentElement.childNodes[0]
  li.classList.toggle("done")
}

function deleteToDo(event){
  const li = event.target.parentElement
  li.remove()
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
  saveToDos()
}

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

todoForm.addEventListener("submit", handleToDoSubmit)

const savedToDos = localStorage.getItem(TODOS_KEY)

if (savedToDos) {
  const parsedToDos = JSON.parse(savedToDos)
  toDos = parsedToDos
  parsedToDos.forEach(paintToDo)
}