//new attribute data-description="" in html


console.log(document.querySelector(".link-dom").getAttribute("href"));
console.log(document.querySelector(".link-dom").href);


document.documentElement.lang = "es"
console.log(document.documentElement.getAttribute('lang'))

document.documentElement.setAttribute("lang", "es-PE")
console.log(document.documentElement.lang); //language

//* State with $ All the variables where the elements of the DOM are defined
const $linkDOM = document.querySelector('.link-dom')

$linkDOM.setAttribute('target', '_blank')
$linkDOM.setAttribute('rel', 'noopener') //! MUST BE ADDED

//* Data-Atribute
console.log($linkDOM.dataset)
console.log($linkDOM.getAttribute('data-description'));
console.log($linkDOM.dataset.description);

if ($linkDOM.hasAttribute('data-description')) {
  $linkDOM.setAttribute('data-description', 'The description was changed to "Document Object Model"')
  console.log($linkDOM.dataset.id);
  console.log($linkDOM.dataset.description);
}