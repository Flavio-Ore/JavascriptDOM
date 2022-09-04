//Nodes
console.log(document.getElementsByTagName('li'));
console.log(document.getElementsByClassName('card'));
console.log(document.getElementsByName('name'));

//querySelector for tags, classes, and ids
document.querySelectorAll("a").forEach(element => console.log(element))

console.log(document.querySelectorAll(".card")[1]);