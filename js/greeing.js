const loginForm = document.querySelector(".contents #login-form")
const loginInput = document.querySelector("#login-form input")
const greeting = document.querySelector("#greeting")
const info = document.querySelector(".info")
const icons = document.querySelector(".contents .material-icons")

const HIDDEN_CLASSNAME = "hidden"
const USERNAME_KEY = "username"

function onLoginSubmit (event) {
  event.preventDefault()
  loginForm.classList.add(HIDDEN_CLASSNAME)
  info.classList.remove(HIDDEN_CLASSNAME)
  icons.classList.remove(HIDDEN_CLASSNAME)
  const username = loginInput.value
  localStorage.setItem(USERNAME_KEY, username)
  paintGreetings(username)
}

function paintGreetings(username) {
  greeting.innerHTML = `Hello ${username} <br> have a nice Day :)`
  greeting.classList.remove(HIDDEN_CLASSNAME)
}

const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  info.classList.add(HIDDEN_CLASSNAME)
  icons.classList.add(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", onLoginSubmit)
} else {
  paintGreetings(savedUsername)
}

icons.addEventListener("click", changeName) 

function changeName (){
  localStorage.removeItem(USERNAME_KEY)
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  info.classList.add(HIDDEN_CLASSNAME)
  icons.classList.add(HIDDEN_CLASSNAME)
  greeting.classList.add(HIDDEN_CLASSNAME)
  loginInput.value=""
}