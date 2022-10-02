const d = document,
  $main = d.querySelector(".main"),
  $startWatch = d.querySelector("#startWatch"),
  $stopWatch = d.querySelector("#stopWatch"),
  $startAlarm = d.querySelector("#startAlarm"),
  $stopAlarm = d.querySelector("#stopAlarm"),
  $template = d.querySelector("#template1"),
  $fragment = d.createDocumentFragment(),
  alarmAudio = new Audio(
    "https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3"
  )

$template.content.querySelector("h2").textContent =
  new Date().toLocaleTimeString()

let clone = $template.content.querySelector("h2").cloneNode(true)

$fragment.appendChild(clone)

$main.querySelector(".stop-watch").append($fragment)

setInterval(() => {
  $template.content.querySelector("h2").textContent =
    new Date().toLocaleTimeString()

  clone = $template.content.querySelector("h2").cloneNode(true)

  $fragment.appendChild(clone)
  $fragment.firstChild.textContent = new Date().toLocaleTimeString()

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
    e.target.setAttribute("disabled", "")
    alarmAudio.play()
    alarmAudio.loop = true
  }

  if (e.target.matches("#stopAlarm") && $startAlarm.hasAttribute("disabled")) {
    alarmAudio.loop = false
    alarmAudio.pause()
    $startAlarm.removeAttribute("disabled")
  }
})
