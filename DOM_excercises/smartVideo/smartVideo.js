const d = document,
  videos = d.querySelectorAll("video[data-smart-video]")

//!fail - when i change the window, the video won't be playing
const observerVisible = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.isIntersecting ? entry.target.play() : entry.target.pause()
    })
  },
  {
    threshold: 0.5,
  }
)

const observerStopVideo = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      entry.target.pause()
    })
  },
  {
    threshold: 0.5,
  }
)

videos.forEach((el) => {
  observerVisible.observe(el)
})

d.addEventListener("DOMContentLoaded", (e) => {
  d.addEventListener("visibilitychange", (e) => {
    if (d.visibilityState === "hidden") {
      videos.forEach((vid) => {
        vid.pause()
      })
    } else {
      videos.forEach((el) => {
        observerVisible.observe(el)
      })
    }
    console.log(d.visibilityState)
  })
})
