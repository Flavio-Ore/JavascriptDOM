//* Elements and objects from window
//!viewport of the page:
console.log('Inner with:',window.innerWidth,'Inner height:', window.innerHeight);

//!the browser:
console.log('outerWidth:',window.innerWidth,'outerHeight',window.outerHeight) 

window.addEventListener("resize", e => {
  console.clear();
  console.log('resize event');
  console.log(e);
})

window.addEventListener('scroll', e => {
  console.clear();
  console.log('scroll event');
  console.log(window.scrollY);
})

//* SLOWER THAN document await the scripts, images, all
window.addEventListener('load', e => {
  //console.clear();
  console.log('load event');
  console.log(window.screenY);
  console.log(window.screenX);
  console.log(e);
})

//* FASTER THAN 'load' await nothing, perfect for async request API's
document.addEventListener('DOMContentLoaded', e => {
  //console.clear();
  console.log('DOM Content Loaded event');
  console.log(window.screenY);
  console.log(window.screenX);
  console.log(e);
})

//* jQuery: slower
/*
!$(window).load(function(){})
!$(window).ready(function(){})
!$(window).on('ready', function(){})
*/