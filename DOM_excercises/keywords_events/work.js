const d = document,
  $space = d.querySelector(".space"),
  spaceId = d.getElementById("#space"),
  $character = d.querySelector(".character")

let coun1 = (coun2 = 0),
  characterSize = 100,
  // prettier-ignore
  spaceWidth = ($space.clientWidth - 4 - characterSize) / 16,
  // prettier-ignore
  spaceHeight = ($space.clientHeight - 4 - characterSize) / 16

d.addEventListener("keypress", (e) => {
  // prettier-ignore
  spaceWidth = ($space.clientWidth - 4 - characterSize) / 16
  // prettier-ignore
  spaceHeight = ($space.clientHeight - 4 - characterSize) / 16

  if (e.key.match("w") || e.key.match("W")) {
    if (coun1 <= 0) {
      $character.style.top = "0px"
    } else {
      coun1--
      $character.style.top = `${coun1}rem`
    }
  }

  if (e.key.match("s") || e.key.match("S")) {
    if (coun1 >= spaceHeight) {
      $character.style.bottom = "0rem"
    } else {
      coun1++
      $character.style.top = `${coun1}rem`
      console.log(`${coun1}rem`)
    }
  }

  if (e.key.match("a") || e.key.match("A")) {
    if (coun2 <= 0) {
      $character.style.left = "0px"
    } else {
      coun2--
      $character.style.left = `${coun2}rem`
    }
  }

  if (e.key.match("d") || e.key.match("D")) {
    if (coun2 >= spaceWidth) {
      $character.style.right = "0px"
    } else {
      coun2++
      $character.style.left = `${coun2}rem`
      console.log(`${coun2}rem`)
    }
  }
})

d.addEventListener("keyup", (e) => {
  if (e.key.match("a") && e.ctrlKey) {
    alert(`You pressed ${e.key} + ctrl`)
  }
})
