const d = document
export default function slider() {
  const nextBtn = d.querySelector(".slider-btns .next"),
    prevBtn = d.querySelector(".slider-btns .prev"),
    slides = d.querySelectorAll(".slider-slide")

  let slideCount = 0

  d.addEventListener("click", (e) => {
    if (e.target === prevBtn) {
      e.preventDefault()

      slides[slideCount].classList.remove("active")

      slideCount--

      if (slideCount < 0) {
        slideCount = slides.length - 1
      }

      slides[slideCount].classList.add("active")
    }

    if (e.target === nextBtn) {
      e.preventDefault()

      slides[slideCount].classList.remove("active")

      slideCount++

      if (slideCount > slides.length - 1) {
        slideCount = 0
      }

      slides[slideCount].classList.add("active")
    }
  })

  setInterval(() => {
    slides[slideCount].classList.remove("active")

    slideCount++

    if (slideCount > slides.length - 1) {
      slideCount = 0
    }

    slides[slideCount].classList.add("active")
  }, 3000)
}
