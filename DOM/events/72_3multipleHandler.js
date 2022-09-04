//!3️⃣ COMO MANEJADOR MÚLTIPLE
  
//👉 Si deseamos asignar varias funciones a un mismo elemento, tenemos el método .addEventListener() que nos perimite levantar un Escuchador de Eventos
const $eventoMultiple = document.getElementById('evento-multiple')
//👇 este método .addEventListener() recibe varios parámetros, pero sólo nos enfocaremos en 2:
  // 1° Nombre de evento
  // 2° Función q se va a ejecutar, pero sin parentesis
$eventoMultiple.addEventListener('click', holaMundo)
  
//👇 tmb podemos trabajar con una arrow function
$eventoMultiple.addEventListener('click', (e) => { //👈 este addEventListener nos dará 2 alerts y 4 console.log, nos da 2 alerts xq en vez de reemplazar como pasa más arriba con el evento de tipo semántico, esta es la ventaja de maneja evento múltiple con addEventListener xq puede ejecutar más funciones
  alert(`Hola Manejador de Evento Múltiple`)
  console.log(e)
  console.log(e.type)
  console.log(e.target)
  console.log(event)
})

