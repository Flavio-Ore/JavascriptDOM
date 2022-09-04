//Elements of the document
console.log(window.document);

console.log(document.head);

console.log(document.documentElement);

console.log(document.doctype);

console.log(document.title);

console.log(document.links);

console.log(document.images);

console.log(document.forms);

console.log(document.styleSheets);

console.log(document.scripts);

setTimeout(() => {
  console.log(document.getSelection().toString())
}, 5000)