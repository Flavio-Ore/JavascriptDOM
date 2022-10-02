export default function lightDarkBtn(
  btn,
  iconSpan,
  mainColor,
  newMainColor,
  secondColor,
  newSecondColor
) {
  const d = document,
    moon_sun = d.querySelector(iconSpan)
  d.addEventListener("click", (e) => {
    if (e.target.matches(btn) || e.target.matches(`${btn} *`)) {
      if (moon_sun.textContent === "brightness_4") {
        d.documentElement.style.setProperty(mainColor, newMainColor)
        d.documentElement.style.setProperty(secondColor, newSecondColor)
        moon_sun.textContent = "brightness_6"
      } else {
        d.documentElement.style.setProperty(mainColor, newSecondColor)
        d.documentElement.style.setProperty(secondColor, newMainColor)
        moon_sun.textContent = "brightness_4"
      }
    }
  })
}
