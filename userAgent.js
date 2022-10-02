const d = document,
  n = navigator,
  //! NO RECOMMENDED
  ua = n.userAgent,
  id = d.getElementById("user-device"),
  isMobile = {
    android: () => ua.match(/android/i),
    ios: () => ua.match(/iphone|ipad|ipod/i),
    windows: () => ua.match(/windows-phone/i),
    any: function () {
      return this.android() || this.ios() || this.windows()
    },
  },
  isDesktop = {
    linux: () => ua.match(/linux/i),
    mac: () => ua.match(/mac os/i),
    windows: () => ua.match(/windows nt/i),
    any: function () {
      return this.linux() || this.mac() || this.windows()
    },
  },
  isBrowser = {
    chrome: () => ua.match(/chrome/i),
    safari: () => ua.match(/safari/i),
    firefox: () => ua.match(/firefox/i),
    opera: () => ua.match(/opera|opear-mini/i),
    ie: () => ua.match(/msie|iemobile/i),
    edge: () => ua.match(/edge/i),
    any: function () {
      return (
        this.ie() ||
        this.firefox() ||
        this.opera() ||
        this.firefox() ||
        this.opera() ||
        this.ie() ||
        this.edge()
      )
    },
  }

d.addEventListener("DOMContentLoaded", (e) => {
  console.log(n)
  console.log(ua)

  console.log(isMobile.any())
  console.log(isDesktop.any())
  console.log(isBrowser.any())
  id.innerHTML = `
  <ul>
    <li>User Agent: <b>${ua}</b></li>
    <li>Platform: <b>${
      isMobile.any() ? isMobile.any() : isDesktop.any()
    }</b></li>
    <li>Browser: <b>${isBrowser.any()}</b></li>
  </ul>
  `
  /** Exclusive Content */
  if (isBrowser.chrome()) {
    id.innerHTML = `<p><mark>This content only appears in Chrome</mark></p>`
  } else {
    id.innerHTML = `<p>This browser <mark>is not Chrome</mark></p>`
  }
})
