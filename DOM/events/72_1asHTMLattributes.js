//!1锔忊儯 COMO ATRIBUTO DEL HTML
    
  //*馃憖 Muy importante: 
  /*馃憠 Esta funci贸n se va a convertir en el Manejador de Eventos (Event Handler)
  *馃憠 Cuando una funci贸n se convierte en un Event Handler, es decir una funci贸n que se ejecuta en un Evento, nosostros podemos acceder a un Objeto especial q es el Evento en s铆, y eso lo podemos acceder con la palabra reservada 'event'
  */
function helloWorld(){
  alert('Holaaa Mundo')
  console.log(event)  //馃憟 con esto en la consola, se desencadena un tipo de Objeto MouseEvent (evento del Mouse), y dentro de 茅l se encuentran dos propiedades muy importantes: type y target.
        
    //&馃憠 type.- es el tipo de evento que se desencadeno
    //&馃憠 target.- es el elemento que origin贸 el evento
    
    //馃憠 Dentro de target estan todos los eventos y propiedades que se pueden usar por dicho elemento y los que estan en null son eventos que no tienen definida dicha funci贸n en dichos eventos. En cambio vemos el evento onclick que si tiene definida la funcion helloWorld()
}