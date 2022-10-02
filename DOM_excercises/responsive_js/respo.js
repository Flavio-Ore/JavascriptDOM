const d = document,
  fragment = d.createDocumentFragment()

export default function responsibleDesignAPIContainer(
  idContainer,
  idTemplate,
  responsiveClass,
  apiTemplateContainerClass,
  apiClass,
  childNodeNameToRemoveMobile,
  childNodeNameToRemoveDesktop,
  responsiveSizeCondition
) {
  const apiContainer = d.getElementById(idContainer),
    template = d.querySelector(idTemplate).content,
    responsiveContent = template.querySelector(responsiveClass),
    api = template
      .querySelector(apiTemplateContainerClass)
      .querySelector(apiClass),
    apiClone = api.cloneNode(true),
    responsiveContentClone = responsiveContent.cloneNode(true)

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

  responsiveSizeCondition
    ? addRemoveChildNode(
        apiContainer,
        responsiveContentClone,
        childNodeNameToRemoveMobile
      )
    : addRemoveChildNode(apiContainer, apiClone, childNodeNameToRemoveDesktop)
}
