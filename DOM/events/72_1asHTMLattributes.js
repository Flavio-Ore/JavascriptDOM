//!1️⃣ COMO ATRIBUTO DEL HTML
    
  //*👀 Muy importante: 
  /*👉 Esta función se va a convertir en el Manejador de Eventos (Event Handler)
  *👉 Cuando una función se convierte en un Event Handler, es decir una función que se ejecuta en un Evento, nosostros podemos acceder a un Objeto especial q es el Evento en sí, y eso lo podemos acceder con la palabra reservada 'event'
  */
function helloWorld(){
  alert('Holaaa Mundo')
  console.log(event)  //👈 con esto en la consola, se desencadena un tipo de Objeto MouseEvent (evento del Mouse), y dentro de él se encuentran dos propiedades muy importantes: type y target.
        
    //&👉 type.- es el tipo de evento que se desencadeno
    //&👉 target.- es el elemento que originó el evento
    
    //👉 Dentro de target estan todos los eventos y propiedades que se pueden usar por dicho elemento y los que estan en null son eventos que no tienen definida dicha función en dichos eventos. En cambio vemos el evento onclick que si tiene definida la funcion helloWorld()
}