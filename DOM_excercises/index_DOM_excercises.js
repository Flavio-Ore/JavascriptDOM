import hamburgerMenu from "./hamburger/jon_solution/jon1.js"

const d = document

d.addEventListener('DOMContentLoaded', e => {
  hamburgerMenu('.panel-btn', '.panel', '.menu a')
})