const $card1 = document.querySelectorAll(".card")[0],
  $card2 = document.querySelectorAll(".card")[1]

console.log($card1)
console.log($card1.className)
console.log($card1.classList)

console.log($card1.classList.contains("rotate-45"))

$card1.classList.add("rotate-45") //adding a class

console.log($card1.classList.contains("rotate-45"))

console.log($card1.classList)

$card1.classList.remove("rotate-45") //removing a class

//*toogle instead of remove and add
setInterval(() => {
  $card1.classList.toggle("rotate-45")
}, 2000)

//*Replacing classes css
$card2.classList.toggle("rotate-135")
$card2.classList.add("opacity-80", "sepia")

setTimeout(() => {
  $card2.classList.remove("opacity-80", "sepia")
  $card2.classList.replace("rotate-135", "rotate-45")
}, 3500)

console.log(document.querySelectorAll(".card"))
