import responsibleDesignAPIContainer from "./respo.js"

const d = document,
  w = window

function responsiveSizeForApiResponsive(responsiveSize) {
  responsibleDesignAPIContainer(
    "mapAPIContainer",
    "#apisTemplate",
    ".responsiveGmaps",
    ".mapTemplateContainer",
    ".mapouter",
    "DIV",
    "A",
    responsiveSize
  )
  responsibleDesignAPIContainer(
    "ytAPIContainer",
    "#apisTemplate",
    ".responsiveYt",
    ".ytTemplateContainer",
    ".yt-frame",
    "DIV",
    "A",
    responsiveSize
  )
}

responsiveSizeForApiResponsive(w.innerWidth <= 1024)

d.addEventListener("DOMContentLoaded", (e) => {
  w.matchMedia("(max-width: 1024px)").addEventListener("change", (e) => {
    responsiveSizeForApiResponsive(e.matches)
    console.log(e.matches)
  })
})
