const d = document

export default function searchFilter(
  searchInputId,
  querySelectorAllElements,
  cssfilter
) {
  const input = d.getElementById(searchInputId),
    elements = d.querySelectorAll(querySelectorAllElements)

  d.addEventListener("input", (e) => {
    if (e.target === input)
      elements.forEach((el) => {
        el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
          ? el.classList.remove(cssfilter)
          : el.classList.add(cssfilter)
      })
  })
}
