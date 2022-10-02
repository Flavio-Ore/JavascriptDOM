const d = document
export default function scrollSpy() {
  const sections = d.querySelectorAll("section[data-scroll-spy]"),
    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            d.querySelector(
              `a[data-scroll-spy][href="#${entry.target.id}"]`
            ).classList.add("active")
          } else {
            d.querySelector(
              `a[data-scroll-spy][href="#${entry.target.id}"]`
            ).classList.remove("active")
          }
        })
      },
      {
        //root: is the body (document)
        //rootMargin: "-250px", by default: 0px 0px 0px 0px
        threshold: 0.5,
      }
    )

  sections.forEach((el) => {
    observer.observe(el)
  })
}
