# todo-list 정리
## 목차
+ 프로젝트 소개
+ 사용 방법
+ 추가할 부분
+ 마치며
---
## 1. 프로젝트 소개
### 1.1 프로젝트 목적
+ 바닐라 자바스크립트를 활용하는 실력을 기르기 위함
+ 배운 내용을 활용하여 내 코드로 만들기 위함
+ localStorage 활용 연습

### 1.2 개발환경
+ window 10
+ vanilla js
+ localStorage
---
## 2. 코드 내용
### 2.1 greeting
1. 이름 입력  
+ submit을 하면 페이지가 자동으로 새로고침되는 것을 preventDefault()로 없애고 localStorage에 저장
+ 저장 후에는 login-form이 안보이게 하고 이름을 출력
``` js
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
```
2. 이름 유무 파악   
+ localStorage를 확인하여 이름의 유뮤를 파악
+ 이름이 있을 경우 이름을 출력
+ 이름이 없을 경우 login-form을 출력
``` js
const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null){
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  info.classList.add(HIDDEN_CLASSNAME)
  icons.classList.add(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", onLoginSubmit)
} else {
  paintGreetings(savedUsername)
}
```
3. 이름 변경
+ 이름 변경 아이콘을 선택하면 localStorage에 있는 이름을 삭제
+ login-form을 출력
```js
icons.addEventListener("click", changeName) 

function changeName (){
  localStorage.removeItem(USERNAME_KEY)
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  info.classList.add(HIDDEN_CLASSNAME)
  icons.classList.add(HIDDEN_CLASSNAME)
  greeting.classList.add(HIDDEN_CLASSNAME)
  loginInput.value=""
}
```
### 2.2 todo-list
1. 저장
+ localStorage는 String으로만 저장할 수 있음
``` js
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}
```
2. 출력
+ createElement를 활용하여 저장한 내용을 출력
``` js
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
  li.appendChild(span)
  li.appendChild(cancelButton)
  li.appendChild(okayButtom)
  toDoList.appendChild(li)
}
```
3. 삭제
+ 출력한 내용을 담은 li를 삭제
+ filter를 활용하여 toDos에 있는 내용을 삭제하고 저장
``` js
function deleteToDo(event){
  const li = event.target.parentElement
  li.remove()
  toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id))
  saveToDos()
}
```
4. 완료된 거 표시
+ 완료 버튼을 누르면 리스트에 line-through 효과
``` js
function doneToDo(event){
  const li = event.target.parentElement.childNodes[0]
  console.log(event)
  li.classList.toggle("done")
}
```
### 2.3 명언
+ random을 활용하여 범위 안에 무작위 숫자를 구함
+ 무작위 숫자를 활용하여 해당하는 명언과 저자를 출력
```js
const quote = document.querySelector(".quotes span:first-child")
const author = document.querySelector(".quotes span:last-child")
const todayQuotes = quotes[(Math.floor(Math.random() * quotes.length))]

quote.innerHTML = todayQuotes.quote
author.innerText = todayQuotes.author
```
### 2.4 시계
+ Date obj를 활용하여 시간을 구함
+ setInterval을 활용하여 1초마다 업데이트 되도록 함
```js
const clock = document.querySelector("h2.clock")

function getclock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0")
  const minutes = String(date.getMinutes()).padStart(2, "0")
  const seconds = String(date.getSeconds()).padStart(2, "0")
  clock.innerHTML = (`${hours}:${minutes}:${seconds}`)
}

getclock()
setInterval(getclock, 1000)
```
---
## 3. 마치며
책, 유튜브, 강의를 보면서 코드를 따라치며 공부를 하다가 재미도 없고 제대로 공부가 되는 지도 몰라서 무엇을 만들어보자라고 뒤져보다가 todo-list를 보고 시작하게 되었습니다.   
쉽게 간단하게 만들 수 있을 줄 알았으나 내 자만이었고 코드가 어떻게 작동되고 어떻게 코드를 짜야할 지 고민하면서 코딩을 하다보니 localStroage가 무엇인지, 다른 사람들이 짠 js코드를 분석 등등... 많은 것을 해보면서 의미있는 시간을 보냈습니다.    
HTML을 쉽게 생각했는데 막상 짜보니 시간이 오래걸리고 이해를 못하는 부분을 확인할 수 있어 부족한 부분을 채울 수 있었던 시간이 었습니다.    
앞으로도 공부를 한 내용을 토대로 작은 프로젝트를 진행하여 내 것으로 만드는 시간을 가져야겠다고 느꼈습니다.