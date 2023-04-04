const d = document,
  $template = d.getElementById('template-movies').content,
  $fragment = d.createDocumentFragment(),
  $shows = d.getElementById('shows'),
  $main = d.querySelector('.main')
let query, api, res, shows, $clone

d.addEventListener('keypress', async e => {
  if (!e.target.matches('#search')) return
  if (e.key !== 'Enter') return

  //prettier-ignore
  query = e.target.value
  try {
    $shows.innerHTML = `<img class="loader" src="/assets/svg/three-dots.svg" alt="Loading...">`
    api = `https://api.tvmaze.com/search/shows?q=${query.toLowerCase()}`
    res = await fetch(api)
    if (!res.ok) throw { status: res.status, statusText: res.statusText }

    shows = await res.json()
    if (shows.length === 0) {
      $shows.innerHTML = `<h2>There are no results for your search:: <mark>${query}</mark></h2>`
    }

    console.log(shows)
    console.log($template)

    shows.forEach(show => {
      show = show.show
      console.log(show)

      $template.querySelector('h3').textContent = show.name

      $template.querySelector('p').outerHTML =
        show?.summary || '<p>No description provided</p>'

      $template.querySelector('.img').src =
        show.image?.medium ||
        'https://static.tvmaze.com/images/no-img/no-img-portrait-text.png'

      $template.querySelector('.img').alt = show.name
      $template.querySelector('.img').style.maxWidth = '100%'

      $template.querySelector('.status').textContent = show.status

      $template.querySelector('a').href = show?.url || '#'
      $template.querySelector('a').target = show.url ? '_blank' : '_self'
      $template.querySelector('a').textContent = 'More information...'

      $clone = d.importNode($template, true)

      $fragment.appendChild($clone)
    })

    $shows.firstChild.remove()
    $shows.appendChild($fragment)
  } catch (err) {
    console.error(err)
    if (
      $shows.innerHTML !==
      `<h2>There are no results for your search: <mark>${query}</mark></h2>`
    ) {
      $shows.innerHTML = `<p>Error ${err.status ?? 'Unknow'}: ${
        err.statusText || 'An error has ocurred'
      }</p>`
    }
  }
})
