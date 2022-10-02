export default function resetScroll(btnResetScroll) {
  const d = document,
    $resetScroll = d.querySelector(btnResetScroll)
  window.addEventListener("scroll", (e) => {
    $resetScroll.style.opacity = 0
    $resetScroll.disabled = true
    $resetScroll.style.visibility = "hidden"
    if (scrollY > 600) {
      $resetScroll.style.opacity = 100
      $resetScroll.style.visibility = "unset"
      $resetScroll.disabled = false
    }
  })

  d.addEventListener("click", (e) => {
    if (e.target.matches(btnResetScroll))
      window.scroll({
        top: 0,
        left: 0,
        behavior: "smooth",
      })
  })
}
