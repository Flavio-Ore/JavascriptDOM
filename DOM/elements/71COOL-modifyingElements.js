/* 
*.insertAdjacent...
!    .insertAdjacentElement(position,el) | (appendChild, appendBefore)
!    .insertAdjacentHTML(position,html)  | (innerHTML)
!    .insertAdjacentText(position,text)  | (textContent)

*posiciones:
!    beforebegin (hermano anterior)
!    afterbegin (primer hijo)
!    beforeend (ultimo hijo)
!    afterend  (hermano siguiente)
*/

const $cards = document.querySelector('.cards'),
    $newCard = document.createElement('figure')

//* Avoid using this:
// $newCard.innerHTML = `
//   <img src="https://placeimg.com/200/200/any" alt="any">
//   <figcaption>Any</figcaption>
// `

//* Instead:
let $contentCard = `
  <img src="https://placeimg.com/200/200/any" alt="Any">
  <figcaption></fig<img src="https://placeimg.com/200/200/any" alt="any>caption>
`
$newCard.classList.add('card')

$newCard.insertAdjacentHTML('afterbegin', $contentCard)

//$cards.insertAdjacentElement('afterbegin', $newCard) //*This was replaced by prepend() method

$newCard.querySelector('figcaption').insertAdjacentText('afterbegin', 'Any')

$cards.prepend($newCard) //add as first child

$cards.append($newCard) //add as last child

$cards.after($newCard) //ass next sibling