const d = document,
  n = navigator
export default function getGeolocation(id) {
  const elementId = d.getElementById(id)

  const success = (position) => {
      let coords = position.coords

      elementId.innerHTML = `
          <p>Latitude: ${coords.latitude}</p>
          <p>Longitude: ${coords.longitude}</p>
          <p>Precision: ${coords.accuracy} meters</p>
          <p>
            <a href="https://www.google.com/maps/@${coords.latitude},${coords.longitude},20z" target="_blank" rel="noopener">See on google maps</a>
          </p>
        `
    },
    error = (err) => {
      elementId.innerHTML = `<p>(ERROR ${err.code}): ${err.message}</p>`
    },
    options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maxiumAge: 0,
    }

  n.geolocation.getCurrentPosition(success, error, options)
}
