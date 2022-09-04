const d = document,
  $main = d.querySelector(".main"),
  $startWatch = d.querySelector("#startWatch"),
  $stopWatch = d.querySelector("#stopWatch"),
  $startAlarm = d.querySelector("#startAlarm"),
  $stopAlarm = d.querySelector("#stopAlarm"),
  $template = d.querySelector("#template1"),
  $fragment = d.createDocumentFragment()

const now = {
  s: new Date().getSeconds(),
  m: new Date().getMinutes(),
  h: new Date().getHours(),
}

$template.content.querySelector(
  "h2"
).textContent = `${now.h} : ${now.m} : ${now.s}`

let clone = $template.content.querySelector("h2").cloneNode(true)

$fragment.appendChild(clone)

$main.querySelector(".stop-watch").append($fragment)

setInterval(() => {
  now.s = new Date().getSeconds()
  now.m = new Date().getMinutes()
  now.h = new Date().getHours()

  $template.content.querySelector(
    "h2"
  ).textContent = `${now.h} : ${now.m} : ${now.s}`

  clone = $template.content.querySelector("h2").cloneNode(true)

  $fragment.appendChild(clone)
  $fragment.firstChild.textContent = `${now.h} : ${now.m} : ${now.s}`

  $main.querySelector("h2").remove()
  $main.querySelector(".stop-watch").append($fragment)
}, 1000)

d.addEventListener("click", (e) => {
  if (e.target.matches("#startWatch")) {
    $main.querySelector(".stop-watch").classList.toggle("toggleH2")
    $startWatch.setAttribute("disabled", "")
  }

  if (e.target.matches("#stopWatch") && $startWatch.hasAttribute("disabled")) {
    $main.querySelector(".stop-watch").classList.toggle("toggleH2")
    $startWatch.removeAttribute("disabled")
  }

  if (e.target.matches("#startAlarm")) {
  }

  if (e.target.matches("#stopAlarm")) {
  }
})
