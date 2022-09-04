//* old style to clone remove add and update nodes (tags)
const $cards = document.querySelector('.cards'),
      $newCard = document.createElement('figure'),
      $cloneCards = $cards.cloneNode(true) //true to clone all the content

$newCard.innerHTML = `
  <img src="https://placeimg.com/200/200/any" alt="any">
  <figcaption>Any</figcaption>
`

$newCard.classList.add('card')

$cards.replaceChild($newCard, $cards.children[2]) //replacing in the 3th slot

$cards.insertBefore($newCard, $cards.firstElementChild) //replacing the first slot

$cards.removeChild($cards.lastElementChild)

document.body.appendChild($cloneCards)