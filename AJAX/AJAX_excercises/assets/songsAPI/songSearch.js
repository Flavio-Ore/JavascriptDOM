const d = document,
  $form = d.getElementById('song-search'),
  $loader = d.querySelector('.loader'),
  $error = d.querySelector('.error'),
  $main = d.querySelector('.main'),
  $artist = d.querySelector('.artist'),
  $song = d.querySelector('.song')

let $artistTemplate = ``,
  $songTemplate = ``

let artist, song, artistApi, songApi, artistRes, songRes, artistData, songData

$form.addEventListener('submit', async e => {
  e.preventDefault()
  try {
    $loader.style.display = 'block'
    artist = e.target.artist.value
    song = e.target.song.value

    artistApi = `https://www.theaudiodb.com/api/v1/json/2/search.php?s=${artist.toLowerCase()}`
    songApi = `https://api.lyrics.ovh/v1/${artist.toLowerCase()}/${song.toLowerCase()}`

    //todo
    //API response IS NOT available
    ;[artistRes, songRes] = await Promise.all([
      fetch(artistApi),
      fetch(songApi),
    ])
    artistData = await artistRes.json()
    songData = await songRes.json()

    if (artistData?.artists === null)
      $artistTemplate = `<h2>Artist not found: <mark>${artist}</mark></h2>`
    else {
      let artist = artistData.artists[0]
      $artistTemplate = `
        <h2>${artist.strArtist}</h2>
        <img src="${artist.strArtistThumb}" alt="${artist.strArtist}">
        <p>${artist.intBornYear} - ${artist?.intDiedYear || 'Present'}</p>
        <p>${artist.sstrCountry}</p>
        <p>${artist.strGenre} - ${artist.strStyle}</p>
        <a href="://${artist.strWebsite}" target="_blank">${
        artist.strArtist
      } Website</a>
        <p>${artist.strBiographyEN}</p>
      `
    }
    $loader.style.display = 'none'
    $artist.innerHTML = $artistTemplate

    if (songData.error) $error.innerHTML = `<p>${songData.error}</p>`
  } catch (error) {
    console.error(error)
    $error.innerHTML = `<p>Error ${error.status || 'Unknow'}: ${
      error.statusText || 'An error has ocurred'
    }</p>`
    $loader.style.display = 'none'
  }
})
