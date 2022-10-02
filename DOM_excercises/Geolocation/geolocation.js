const d = document,
  n = navigator

export default function geolocation(elementById, querySelectorChild = null) {
  let positionInfo = d.getElementById(elementById)
  if (querySelectorChild !== null)
    positionInfo = d
      .getElementById(elementById)
      .querySelector(querySelectorChild)

  n.geolocation.getCurrentPosition(
    (pos) => {
      let crd = pos.coords
      positionInfo.insertAdjacentHTML(
        "beforeend",
        `
        <p>Latitude: ${crd.latitude}</p>
        <p>Longitude: ${crd.longitude}</p>
        <p>Precision: ${crd.accuracy} meters</p>
        <p>
          <a href="https://www.google.com/maps/@${crd.latitude},${crd.longitude},${crd.accuracy}z" target="_blank" rel="noopener">See on google maps</a>
        </p>
      `
      )
    },
    (err) => {
      positionInfo.insertAdjacentHTML(
        "beforeend",
        `<p>(ERROR ${err.code}): ${err.message}</p>`
      )
    },
    {
      // Options
      enableHighAccuracy: true,
      maximumAge: 0,
    }
  )
}
