//window.alert('Text')
//window.confirm('Confirm') //~true false
//window.prompt('Input')

const $openBtn = document.getElementById('openWindow'),
      $closeBtn = document.getElementById('closeWindow'),
      $printBtn = document.getElementById('printWindow')

let windo

$openBtn.addEventListener('click', e => {
  windo = open('https://github.com/VertederoDeGon')
})

$closeBtn.addEventListener('click', e =>  {
  windo.close() //* close the github window
})

$printBtn.addEventListener('click', e => {
  print()
})