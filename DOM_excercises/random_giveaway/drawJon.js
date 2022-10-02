export default function draw(btn, selector) {
  //* This could be used in any nodelist as comments
  const getWinner = (selector) => {
    const players = document.querySelectorAll(selector),
      random = 0 | (Math.random() * players.length),
      winner = players[random]

    return `The winner is ${winner.textContent}`
  }
  document.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector)
      alert(result)
      console.log(result)
    }
  })
}
