const d = document
export default function countdown(id, limitDate, finalMessage) {
  const $countdown = d.getElementById(id),
    countdownDate = new Date(limitDate).getTime()

  let now = new Date().getTime(),
    limitTime,
    days,
    hours,
    minutes,
    seconds

  let countdownTempo = setInterval(() => {
    now = new Date().getTime()
    limitTime = countdownDate - now
    days = Math.floor(limitTime / (1000 * 60 * 60 * 24))
    hours = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    ).slice(-2)
    minutes = (
      "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
    ).slice(-2)
    seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2)

    $countdown.innerHTML = `<h3>${days} days : ${hours} hours : ${minutes} minutes : ${seconds} seconds</h3>` //!NEVER USE INNER HTML

    if (limitTime < 0) {
      clearInterval(countdownTempo)
      $countdown.innerHTML = `<h3>${finalMessage}</h3>` //!NEVER USE INNER HTML
    }
  }, 1000)
}
