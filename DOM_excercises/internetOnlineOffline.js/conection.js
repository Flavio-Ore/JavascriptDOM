const w = window,
  d = document,
  n = navigator

let conectionNode = d.createElement("h4"),
  on = d.createElement("b")
conectionNode.textContent = "Current network status: "

conectionNode.appendChild(on)

export default function conection(querySelector) {
  const idSectiond = d.querySelector(querySelector)

  const isOnline = (conectionStatus) => {
    if (conectionStatus) {
      on.textContent = "Online"
      idSectiond.appendChild(conectionNode)
    }
    if (!conectionStatus) {
      on.textContent = "Offline"
      idSectiond.appendChild(conectionNode)
    }
  }

  isOnline(n.onLine)
  w.addEventListener("online", (e) => {
    isOnline(n.onLine)
  })
  w.addEventListener("offline", (e) => {
    isOnline(n.onLine)
  })
}
