// 68. DOM: Creando Elementos y Fragmentos

//* Crear elementos (etiquetas HTML) dinámica a través de JS
const $figure = document.createElement("figure"), //<figure></figure>
      $img = document.createElement("img"), //<img></img>
      $figcaption = document.createElement("figcaption"), //<figcaption></figcaption> 
      $figcaptionText = document.createTextNode("Animals"), //nodo de texto dentro del nodo "figcaption" <figcaption>Animals</figcaption>
      $cards = document.querySelector(".cards"), 
      $figure2 = document.createElement("figure"); //<figure></figure>

$img.setAttribute("src", "https://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");
$figure.classList.add("card");

//* agregarlas al árbol
$figcaption.appendChild($figcaptionText);
$figure.appendChild($img);
$figure.appendChild($figcaption)
$cards.appendChild($figure); 

/*
!This was created:
  <section class="cards">
    <figure></figure>
    .
    .
    .
    <figure></figure>
    *new tag
    <figure>
      <img alt="animals" src="http://placeimg.com/200/200/animals>
      <figcaption>Animals</figcaption>
    </figure>
  </section>
*/

//* otra forma de agregar un elemento hijo (no recomendada porque no esta creando un NODO html)
$figure2.innerHTML = `
<img src="https://placeimg.com/200/200/people" alt="People">
<figcaption>People</figcaption>
`
$figure2.classList.add("card");
$cards.appendChild($figure2);

// otra forma
const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
      $ul = document.createElement("ul");

//* no es una buena practica "write" (mayor consumo de recursos del navegador)
document.write("<h3>Estaciones del Año</h3>");
document.body.appendChild($ul);

estaciones.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li);
});

//* otra forma (mayor consumo de recursos del navegador)
const continentes = ["África", "América", "Asia", "Europa", "Oceanía"],
      $ul2 = document.createElement("ul");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML += `<li>${el}</li>`));

//* otra forma (ESTA ES LA MEJOR FORMA)
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  $ul3 = document.createElement('ul'),
  $fragment = document.createDocumentFragment()

months.forEach((el) => {
  const $li = document.createElement('li')
  $li.textContent = el
  $fragment.appendChild($li)
})
  
document.write('<h3>Months of the year</h3>')
$ul3.appendChild($fragment)
document.body.appendChild($ul3)