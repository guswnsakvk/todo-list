const quotes = [
  {
    quote: "꿈을 이루고자 하는 용기만 있다면 모든 꿈을 이룰 수 있다<br>",
    author: "<월트 디즈니>"
  },
  {
    quote: "비록 해가 진다고 해도, 나에게는 전기불이 있다<br>",
    author: "<로커 커트 코베인>"
  },
  {
    quote:
      "조금도 도전하지 않으려고 하는 것이 인생에서 가장 위험한 일이다<br>",
    author: "<오프라 윈프리>"
  },
  {
    quote: "행동은 모든 성공의 가장 기초적인 핵심이다<br>",
    author: "<파블로 피카소>"
  },
  {
    quote: "용기란 죽을만큼 두려워도 무언가 해보는 것이다<br>",
    author: "<영화배우 존 웨인>"
  },
  {
    quote: "승리는 가장 끈기 있는 사람에게 돌아간다<br>",
    author: "<보나파르트 나폴레옹>"
  },
  {
    quote: "노력하는 사람에게 불가능이란 없다<br>",
    author: "<알렉산더 대왕>"
  }
]

const quote = document.querySelector(".quotes span:first-child")
const author = document.querySelector(".quotes span:last-child")
const todayQuotes = quotes[(Math.floor(Math.random() * quotes.length))]

quote.innerHTML = todayQuotes.quote
author.innerText = todayQuotes.author