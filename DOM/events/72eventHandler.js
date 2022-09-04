/*
 * 📝 Los Eventos
👉 Es aquel mecanismo que tenemos en JS para poder controlar las acciones del usuario y definir ciertos comportamientos del documento q sucedan en cierto momento o cuando se cumplan algunas condiciones.

👉 Ahora, las funciones que se ejecutan en un Evento es lo que se conoce como el Event Handler o traducido Manejadores de Eventos, o también Observadores o Escuchadores.
    
👉 Hay 3 maneras de definir los Eventos en JS :
!as HTML attribute
!Semantic Handler
!multiple Handler
*/

//* html attribute:
const $cards = document.querySelector('.cards')
$cards.remove()

function helloWorld(){ //* <- Event handler function
  alert('HOLA')
  console.log(event);
  console.log('Current target: ', event.target);
}

//*Semantic Handler:
const $semanticEvent = document.getElementById('semantic-event')

$semanticEvent.onclick = helloWorld //can only execute one function

$semanticEvent.onclick = function(e){ //only can recibe one param
  alert('BYE world')
  console.log(e); //* e  === event
}

//*Multiple event:
const $multipleEvent = document.getElementById('multiple-event')

$multipleEvent.addEventListener('click', helloWorld) //* <- Many methods can be executed

$multipleEvent.addEventListener('click', (e) => {
  console.log('Type: ', e.type);
})

//*📝NOTA:
//👉 Cuando escuchemos de Event Handler hacemos referencia a la función q se ejecuta en dicho Evento   

//👉 Una misma función nos puede servir para desencadenar eventos en diferentes elementos

//👉 Los eventos semánticos tienen un pequeño inconveniente, si nos damos cuenta, cuando hablabamos de los Prototipos y hablamos de la funcion constructora, y si queriamos agregarle más métodos teniamos q agregarle a su Prototipo, aqui pasa algo similar, el onclick es como agregarle un método al Prototipo del Modelo de eventos del elemento del DOM q se estamos manejando

//👉 Habrá veces q a lo mejor a un mismo elemento Html le asignemos diferentes Manejadores de Eventos, es decir diferentes funciones q hagan diferentes cosas, bueno la limitante q tienen los eventos de tipo semántico, es q una vez q esta definido el evento semántico sólo va poder ejecutar una función.

//👉 Toda función q se convierte en un Manejador de Eventos, es decir una función q se ejecuta en algún momento en un evento no puede recibir parámetros, el único parámetro q recibe es el evento en sí, que lo podemos obtener con la palabra 'event' o en algunos casos abreviar con la letra 'e'