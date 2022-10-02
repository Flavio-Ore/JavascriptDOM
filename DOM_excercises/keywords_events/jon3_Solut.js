const d = document
export function shortcut(e) {
  // console.log(e.type)
  // console.log(e.key)
  // console.log(e.keyCode)
  // console.log(e.keyCode)
  // console.log("ctrl: " + e.ctrlKey)
  // console.log("alt: " + e.altKey)
  // console.log("shift: " + e.shiftKey)
  //* console.log(e)
  if (e.key === "a" && e.altKey) {
    alert("You have throw an alert by the keyboard")
  }
  if (e.key === "c" && e.altKey) {
    confirm("You have throw an confirmation by the keyboard")
  }

  if (e.key === "p" && e.altKey) {
    prompt("You have throw an prompt by the keyboard")
  }
}
//* This functions are stored in the browser memory
// function xMove(xMinus = false) {
//   if (sessionStorage.getItem("x") == null) sessionStorage.setItem("x", "0")

//   let counterX = Number(sessionStorage.getItem("x"))

//   xMinus
//     ? sessionStorage.setItem("x", counterX - 1)
//     : sessionStorage.setItem("x", counterX + 1)

//   return counterX
// }

// function yMove(yMinus = false) {
//   if (sessionStorage.getItem("y") == null) sessionStorage.setItem("y", "0")

//   let counterY = Number(sessionStorage.getItem("y"))

//   yMinus
//     ? sessionStorage.setItem("y", counterY - 1)
//     : sessionStorage.setItem("y", counterY + 1)

//   return counterY
// }

const xy = {
  x: 0,
  y: 0,
}

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball),
    $stage = d.querySelector(stage),
    limitsBall = d.querySelector(".ball").getBoundingClientRect(),
    limitsStage = $stage.getBoundingClientRect()

  switch (e.keyCode) {
    case 65: //left, key "a"
      e.preventDefault()
      if (limitsStage.left < limitsBall.left) xy.x--
      break

    case 87: //up, key "w"
      e.preventDefault()
      if (limitsStage.top < limitsBall.top) xy.y--
      break

    case 68: //right, key "d"
      e.preventDefault()
      if (limitsStage.right > limitsBall.right) xy.x++
      break

    case 83: //down, key "s"
      e.preventDefault()
      if (limitsStage.bottom > limitsBall.bottom) xy.y++
      break

    default:
      break
  }
  $ball.style.transform = `translate(${xy.x * 10}px, ${xy.y * 10}px)`
}
