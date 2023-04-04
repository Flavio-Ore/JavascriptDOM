import STRIPE_KEYS from './stripe-keys.js'

const d = document,
  comidaPeruana = d.getElementById('peru'),
  template = d.getElementById('peru-template').content,
  fragment = d.createDocumentFragment(),
  stripeAuth = { headers: { Authorization: `Bearer ${STRIPE_KEYS.secret}` } }

let prices, products, productData, clone

const moneyFormatter = (price = '') =>
  `S/.${price.slice(0, -2)}.${price.slice(-2)}`

Promise.all([
  fetch('https://api.stripe.com/v1/products', stripeAuth),
  fetch('https://api.stripe.com/v1/prices', stripeAuth),
])
  .then(responses =>
    Promise.all(
      responses.map(res => (res.ok ? res.json() : Promise.reject(res)))
    )
  )
  .then(json => {
    products = json[0].data
    prices = json[1].data
    console.log(products, prices)

    prices.forEach(el => {
      productData = products.filter(product => product.id === el.product)

      template.querySelector('.peru-plato').setAttribute('data-price', el.id)
      template.querySelector('img').src = productData[0].images[0]
      template.querySelector('img').alt = productData[0].name
      template.querySelector('figcaption').innerHTML = `
      ${productData[0].name}
        <br>
      ${moneyFormatter(el.unit_amount_decimal)} ${el.currency}
      `

      clone = d.importNode(template, true)
      fragment.appendChild(clone)
    })
    comidaPeruana.appendChild(fragment)
  })
  .catch(err => {
    console.error(err)
    let msg =
      err.statusText || 'An error has ocurred when connecting Stripe API'
    comidaPeruana.innerHTML = `<p>Error ${err.status}: ${msg}</p>`
  })
d.addEventListener('click', e => {
  if (e.target.matches('.peru-plato *')) {
    let price = e.target.parentElement.getAttribute('data-price')
    //redirectToCheckout req a configuration
    Stripe(STRIPE_KEYS.public)
      .redirectToCheckout({
        lineItems: [{ price, quantity: 1 }],
        mode: 'subscription',
        successUrl:
          'http://127.0.0.1:5500/assets/stripe/stripe-checkout_SUCCESS.html',
        cancelUrl:
          'http://127.0.0.1:5500/assets/stripe/stripe-checkout_ERROR.html',
      })
      .then(res => {
        if (res.error) {
          comidaPeruana.insertAdjacentHTML('afterend', res.error.message)
        }
      })
  }
})
