const d = document,
  w = window,
  speechMessage = new SpeechSynthesisUtterance()

let voices = [],
  option

export default function speechReader() {
  const speechSelect = d.getElementById('speech-select'),
    speechTextarea = d.getElementById('speech-text'),
    speechBtn = d.getElementById('speech-btn')

  d.addEventListener('DOMContentLoaded', (e) => {
    w.speechSynthesis.addEventListener('voiceschanged', (e) => {
      voices = w.speechSynthesis.getVoices()
      voices.forEach((voice) => {
        option = d.createElement('option')
        option.value = voice.name
        option.textContent = `${voice.name} --- ${voice.lang}`

        speechSelect.appendChild(option)
      })
    })
  })

  d.addEventListener('change', (e) => {
    if (e.target === speechSelect) {
      speechMessage.voice = voices.find(
        (voice) => voice.name === e.target.value
      )
    }
  })

  d.addEventListener('click', (e) => {
    if (e.target === speechBtn) {
      speechMessage.text = speechTextarea.value
      w.speechSynthesis.speak(speechMessage)
    }
  })
}
