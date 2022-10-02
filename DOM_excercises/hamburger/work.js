const $menuBtn = document.getElementById('menuBtn'),
      $navbar = document.querySelector('.navbar')


document.addEventListener('click', e => {
  if(e.target.matches('#menuBtn')) {
    $navbar.style.minWidth = '100vw'
    $navbar.style.left = 0
  } else {
    $navbar.style.left = '-1800px'
  }
})