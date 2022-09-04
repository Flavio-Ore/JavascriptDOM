/* Template tag
  <template id="template-card">
    <figure class="card">
      <img>
      <figcaption></figcaption>
    </figure>
  </template>
*/

/*
*1.Crear el template en Html
*2.Crear el Template en js
*3.Crear el fragment en js
*4.Ejecutar la función y/o el proceso y llevar al template y luego al fragment para después pintarlo en el HTML.
*/

const $cards = document.querySelector('.cards'),
      $template = document.getElementById('template-card').content,
      $fragment = document.createDocumentFragment(),
      cardContent = [
        {
          title: 'TECNOLOGÍA',
          img: 'https://placeimg.com/200/200/tech'
        },
        {
          title: 'ANIMALES',
          img: 'https://placeimg.com/200/200/animals'
        },
        {
          title: 'ARQUITECTURA',
          img: 'https://placeimg.com/200/200/arch',
        },
        {
          title: 'PERSONAS',
          img: 'https://placeimg.com/200/200/people',
        },
        {
          title: 'NATURALEZA',
          img: 'https://placeimg.com/200/200/nature'
        }
      ] //simulate fetch request

cardContent.forEach(el => {
  $template.querySelector('img').setAttribute('src', el.img)
  $template.querySelector('img').setAttribute('alt', el.title)
  $template.querySelector('figcaption').textContent = el.title

  let $clone = document.importNode($template, true)
  $fragment.appendChild($clone)
})

$cards.appendChild($fragment)