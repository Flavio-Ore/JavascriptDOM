const d = document,
  w = window

export default function responsiveTester(idForm) {
  const form = d.getElementById(idForm)
  let tester

  d.addEventListener("submit", (e) => {
    if (e.target === form) {
      e.preventDefault()
      tester = w.open(
        form.direction.value,
        "tester",
        `innerWidth = ${form.width.value}, innerHeight = ${form.height.value}`
      )
      console.log(form.direction)
    }
  })
  //* https://developer.mozilla.org/en-US/docs/Web/API/Window/open
  d.addEventListener("click", (e) => {
    if (e.target === form.close) tester.close()
  })
}
