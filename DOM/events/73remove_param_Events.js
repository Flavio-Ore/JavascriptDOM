//* When a function needs params
const $cards = document.querySelector('.cards'),
      $multipleEvent = document.getElementById('multiple-event'),
      $removeEvent = document.getElementById('remove-event'),
      removeDoubleClick = e => {
        alert('Removing the event type: ' + e.type)
        console.log(e)
        $removeEvent.removeEventListener('dblclick', removeDoubleClick)
        $removeEvent.disabled = true
      }

$cards.remove()

function hello(name = 'unknown'){
  alert('hello ' + name)
}

$multipleEvent.addEventListener('click', (e) => {
  console.log(e)
  console.log(e.target);
  console.log(e.type);
})

//$multipleEvent.addEventListener('click', hello) //*<- the param is [object PointerEvent], because it can't receive more than one param 

$multipleEvent.addEventListener('click', () => {
  hello()
  hello('Event')
})

//* To remove, the function must be a convencional function and not arrow, because the removeEventListener needs and reference of that function

$removeEvent.addEventListener('dblclick', removeDoubleClick)