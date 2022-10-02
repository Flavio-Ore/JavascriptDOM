const d = document,
  w = window
//*fail
export default function menuObserver(qSelectorAll, qSelectorAllMenu) {
  const elements = d.querySelectorAll(qSelectorAll),
    nav = d.querySelectorAll(qSelectorAllMenu),
    observer = new IntersectionObserver(
      (entries) => {
        const entriesList = entries.length

        entries.forEach((entry, index) => {
          console.log(entriesList)
          //console.log(entry)
          if (entry.target.id === nav.item(index).id) {
            console.log(nav)
          }
        })
      },
      {
        threshold: 0.99,
      }
    )

  elements.forEach((element) => {
    observer.observe(element)
  })
}
