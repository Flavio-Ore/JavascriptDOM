//* Original code below
const d = document,
  w = window,
  fragment = d.createDocumentFragment(),
  restoreResponsiveClone = []

export default function responsibleDesignAPIContainer(
  idContainer1,
  idContainer2,
  restoreResponsiveAPIAll,
  apisTemplate,
  API1Template,
  API2Template,
  API1,
  API2,
  childNodeNameToRemove1,
  childNodeNameToRemove2,
  calculateStartSize
) {
  const mapAPIContainer = d.getElementById(idContainer1),
    ytAPIContainer = d.getElementById(idContainer2),
    restoreMapYt = d
      .querySelector(apisTemplate)
      .content.querySelectorAll(restoreResponsiveAPIAll),
    mapAPI = d
      .querySelector(apisTemplate)
      .content.querySelector(API1Template)
      .querySelector(API1),
    ytAPI = d
      .querySelector(apisTemplate)
      .content.querySelector(API2Template)
      .querySelector(API2)

  let API1Clone = mapAPI.cloneNode(true),
    API2Clone = ytAPI.cloneNode(true)

  for (let i = 0; i < restoreMapYt.length; i++)
    restoreResponsiveClone[i] = restoreMapYt[i].cloneNode(true)

  const addRemoveChildNode = (
    container,
    childCloneToAdd,
    childNodeNameToRemove
  ) => {
    fragment.appendChild(childCloneToAdd)

    container.childNodes.forEach((el) => {
      if (el.nodeName === childNodeNameToRemove) container.removeChild(el)
    })

    container.appendChild(fragment.firstChild)
  }

  const conditionAddRemoveChildNode = (condition) => {
    if (condition) {
      addRemoveChildNode(
        mapAPIContainer,
        restoreResponsiveClone[0],
        childNodeNameToRemove1
      )
      addRemoveChildNode(
        ytAPIContainer,
        restoreResponsiveClone[1],
        childNodeNameToRemove1
      )
    } else {
      addRemoveChildNode(mapAPIContainer, API1Clone, childNodeNameToRemove2)
      addRemoveChildNode(ytAPIContainer, API2Clone, childNodeNameToRemove2)
    }
  }

  conditionAddRemoveChildNode(calculateStartSize)

  w.matchMedia("(max-width: 1080px)").addEventListener("change", (e) => {
    conditionAddRemoveChildNode(e.matches)
  })

  w.matchMedia("(max-height: 740px)").addEventListener("change", (e) => {
    conditionAddRemoveChildNode(e.matches)
  })
}
