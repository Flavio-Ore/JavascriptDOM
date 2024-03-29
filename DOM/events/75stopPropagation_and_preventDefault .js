/*👉 Van a haber veces donde no requeramos que nuestro evento se propague hacia los elementos hijos o padres, dependiendo de la fase que estemos trabajando, y entonces solamente se ejecute una sola vez la programacion de tu funcion manejadora

//*👉Tambien van a haber veces donde hay ciertos elementos del DOM que tienene comportamientos o eventos ya por defecto. Por ejemplo, pensa en el boton submit que tiene un formulario. Sin necesidad que nosotros programamemos con JS el formulario, a la hora que presionas un input de tipo submmit dentro de un formulario ese formulario se procesa

//*👉 Por ejemplo cuando nosotros estamos controlando el scroll de las barras de desplazamiento, ya sea con las flechas o con la ruedita del mouse, ese es el comportamiento default que justamente tienen las teclas de arriba y abajo o de izquierda y derecha, en el caso de desplazamiento horizontal, y la rueda del mouse. Otro comportamiento por defecto seria los comportamientos que tienen los enlaces, cuando le das click a un enlace te va a llevar al contenido que tenga ese link en su propiedad href

//* 👀 Pero van a haber veces que por ejemplo, mandas un formulario y en lugar de que se procese de manera convencional, vos lo que vas a hacer con JS es solicitar una peticion asincrona via AJAX y esa peticion consulta una base de datos que va a tardar. Cuando este lista la respuesta te va a responder, entonces ahi tendriamos que desactivar el comportamiento de que el formulario se procese de forma automatica

//? 🤔 Para prevenirlo, hay que ejectuar un metodo que esta dentro del evento en si, me refiero a: event.preventDefault(), esto lo que hace es eliminar el comportamiento que tiene nuestro elemento por default. Que en el caso de los enlaces es redirigirnos hacia la direccion que tenga dentro de su atributo href

*/
const $eventDiv = document.querySelectorAll(".event-flow div"),
      $eventLink = document.querySelector(".event-flow a");
  
function eventFlow(e) {
  console.log(`Hello, "${this.className}" is greating you, this click was generated by "${e.target.className}"`) //* This, refers to the event it belongs to

  e.stopPropagation();//!👈 Este metodo va a eliminar la propagacion
}

$eventDiv.forEach(div => {
  div.addEventListener("click", eventFlow, true)
});

$eventLink.addEventListener("click", e => {
  alert("HELLO SECRET WORLD!")
  e.preventDefault()//^👈Este metodo va a eliminar el comportamiento por defecto
  e.stopPropagation();//^👈Este metodo va a eliminar la propagacion
})

//* Al darle click al enlace, ya que esta dentro de la div 'tres', el evento se propaga y se ejecuta el evento que le asigne a la div 'tres'