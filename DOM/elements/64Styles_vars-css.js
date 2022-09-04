//*Styles inside the html file
const $linkDOM = document.querySelector('.link-dom')

console.log($linkDOM.style);
console.log($linkDOM.style.fontSize);

//*Styles from a css file
const styleLinkDOM = getComputedStyle($linkDOM)

console.log(styleLinkDOM);
console.log(styleLinkDOM.backgroundColor);

$linkDOM.style.setProperty("text-decoration", 'none')
$linkDOM.style.setProperty("color", '#020202')
$linkDOM.style.display = 'block'
$linkDOM.style.textAlign = 'center'

//* Variables CSS - Custom Properties CSS (from :root{})
const $html = document.documentElement,
      $body = document.body,
      $unList1 = document.querySelector('.un-list-1')

let varOrangeColor = getComputedStyle($html).getPropertyValue('--orange-color'),
    varGreenColor = getComputedStyle($body).getPropertyValue('--green-color')

$unList1.style.backgroundColor = varOrangeColor

$html.style.setProperty('--orange-color', '#025')

varOrangeColor = getComputedStyle($html,).getPropertyValue('--orange-color')

$unList1.style.setProperty('background-color', varOrangeColor)