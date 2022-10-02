const d = document
export default function virtual_giveaway(listId, btnId) {
  const guests = d.getElementById(listId),
    btn = d.getElementById(btnId)

  let rnd = 0 | (Math.random() * guests.children.length)

  d.addEventListener("click", (e) => {
    if (e.target === btn) {
      rnd = 0 | (Math.random() * guests.children.length)
      alert(guests.children[rnd].textContent + " is the winner")
    }
  })
}
