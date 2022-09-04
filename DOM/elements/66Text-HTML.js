const $whatIsDom = document.getElementById('what-is')
let a,
    b,
    c
let text = `
    <p>
        El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un API para documentos HTML y XML.
    </p>
    <p>
        Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
    </p>
    <p>
    <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
    </p>
`

//*Is replaced by the following
//* $whatIsDom.innerText = text //Introduce literal text template

$whatIsDom.textContent = text //add text as text

$whatIsDom.innerHTML = text //add html content code

$whatIsDom.outerHTML = text