import lightDarkBtn from "./darkMode.js"
import resetScroll from "./scroll1.js"

document.addEventListener("DOMContentLoaded", (e) => {
  resetScroll(".reset-scroll")
  lightDarkBtn(
    ".light-dark",
    ".moon_sun",
    "--mn-color",
    "#fcc",
    "--snd-color",
    "#020202"
  )
})
