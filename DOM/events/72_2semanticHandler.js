function helloWorld(){ //* <- Event handler function
  alert('HOLA')
  console.log(event);
  console.log('Current target: ', event.target);
}

//!2️⃣ COMO MANEJADOR SEMÁNTICO

//👉 Se le dice manejador semántico xq va teniendo una coherencia en la manera como la vamos definiendo
//👉 cuando definamos un evento como semántico igualamos el evento semántico al nombre de la funcion pero sin (), xq los () hacen q cuando se cargue el Navegador se va a ejecutar
const $eventoSemantico = document.getElementById('semantic-event')
$eventoSemantico.onclick = helloWorld //👈 no le ponemos () a la función xq sino al momento q se recarga el Navegador, se estará ejecutando el evento, y luego la consola nos dará undefined, xq el objeto event q mandamos a la consola no estará definido, xq la función se ejecutó asi como va, osea a la hora de cargar como tiene los parentesis se ejecuta.

//👇 esta es otra manera de definir un Evento de tipo semántico, puede ser una función anónima o una arrow function
$eventoSemantico.onclick = function(e){  //👈 Toda función q se convierte en un Manejador de Eventos, es decir una función q se ejecuta en algun momento en un evento no puede recibir parámetros, el único parámetro q recibe es el evento en sí, que lo podemos obtener con la palabra 'event' o en algunos casos abreviar con la letra 'e'
  alert(`Hola Manejador de Evento Semántico`)
  console.log(e)
  console.log(event)
}
