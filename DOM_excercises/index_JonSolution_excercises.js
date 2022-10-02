import webcam from './camera/detect_webcam.js'
import countdown from './countdown/jon4.js'
import contactFormValidations from './form_validation/validationsForms.js'
import geolocation from './Geolocation/geolocation.js'
import getGeolocation from './Geolocation/jonSolugeolocation.js'
import hamburgerMenu from './hamburger/jonHamburger.js'
import speechReader from './interactiveNarrator/narrator.js'
import conection from './internetOnlineOffline.js/conection.js'
import networkStatus from './internetOnlineOffline.js/jonSoluConection.js'
import menuObserver from './intersectionObserver/menuObserver.js'
import scrollSpy from './intersectionObserver/scrollSpy.js'
import { shortcut, moveBall } from './keywords_events/jon3_Solut.js'
import scrollTopBtn from './localStorage_scroll_darkTheme/jonSoluscrollTop.js'
import jonDarkMode from './localStorage_scroll_darkTheme/jonSol_darkMode.js'
import draw from './random_giveaway/drawJon.js'
import virtual_giveaway from './random_giveaway/virtual_giveaway.js'
import responsiveMedia from './responsive_js/deprecatedJonSolution.js'
import responsiveTester from './responsive_tester/test_responsive.js'
import searchFilters from './searchFilter/jonFilter.js'
import searchFilter from './searchFilter/searchFilter.js'
import slider from './slider/jonSlider.js'
import slide from './slider/slider.js'
import jonSmartVideo from './smartVideo/jonSmartVideo.js'
import { digitalClock, alarm } from './watch/watch_jon2.js'

const d = document,
  stopBtn = d.getElementById('stopEvent'),
  startBtn = d.getElementById('startEvent')

const keydownEvent = (e) => {
  moveBall(e, '.ball', '.stage')
}

d.addEventListener('DOMContentLoaded', (e) => {
  hamburgerMenu('.panel-btn', '.panel', '.menu a')
  digitalClock('#watch', '#activar-reloj', '#desactivar-reloj')
  d.addEventListener('click', (e) => {
    if (e.target === stopBtn) {
      d.removeEventListener('keydown', keydownEvent)
      stopBtn.disabled = true
      stopBtn.disabled === true
        ? (startBtn.disabled = false)
        : (startBtn.disabled = true)
    }
    if (e.target === startBtn) {
      d.addEventListener('keydown', keydownEvent)
      startBtn.disabled = true
      startBtn.disabled === true
        ? (stopBtn.disabled = false)
        : (stopBtn.disabled = true)
    }
  })
  alarm(
    'https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3',
    '#activar-alarma',
    '#desactivar-alarma'
  )
  //random date "Januart 01, 2023 00:00:00"
  countdown('countdown', 'September 08, 2023 18:22:00', 'Happy Birthday')
  scrollTopBtn('.scroll-top-btn')
  responsiveMedia(
    'youtube',
    '(min-width: 1024px)',
    `<a href="https://www.youtube.com/embed/6IwUl-4pAzc" target="_blank" rel="noopener">View video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/6IwUl-4pAzc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  )
  responsiveMedia(
    'gmaps',
    '(min-width: 1024px)',
    `<a href="https://goo.gl/maps/dZ5Vip7gkFAJ27Zd7" target="_blank" rel="noopener">View Map</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7806.01346513632!2d-77.00516500476249!3d-11.97403542047548!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c567fce535eb%3A0x22dbd9e1d947ba3a!2sLos%20Pinos%2C%20San%20Juan%20de%20Lurigancho%2015419!5e0!3m2!1sen!2spe!4v1663620723245!5m2!1sen!2spe" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  )

  responsiveTester('responsive-tester')

  webcam('webcam')
  //geolocation("section8", "h3")  //!My solution
  getGeolocation('geolocation')
  //searchFilter("search-filter", ".card", "filter") //!My solution
  searchFilters('#search-filter', '.card')
  //virtual_giveaway("#winner-btn", "giveaway") //!My solution
  draw('#winner-btn', '.draw-list__li')

  //? No params, because of Bootstrap's philosophy. If  marking of the documentation is respected, all the components will work.
  //slide() //!My solution (fail)
  slider()
  //menuObserver(".section", ".menu a") //!My solution (fail)
  scrollSpy()
  jonSmartVideo()
  contactFormValidations()
})

speechReader()

d.addEventListener('keydown', (e) => {
  shortcut(e)
})

//conection("#section6") //!My solution
networkStatus()
jonDarkMode('.dark-theme-btn', 'dark-mode')
