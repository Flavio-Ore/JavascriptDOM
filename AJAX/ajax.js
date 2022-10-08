//^ Object XMLHttpRequest
;(() => {
  console.log('Object XMLHttpRequest')
  const xhr = new XMLHttpRequest(),
    xhrEl = document.getElementById('xhr'),
    fragment = document.createDocumentFragment()

  let json, li, message

  //console.log(xhr)

  xhr.addEventListener('readystatechange', (e) => {
    if (xhr.readyState !== 4) return

    if (xhr.status >= 200 && xhr.status < 300) {
      //console.log('success')
      json = JSON.parse(xhr.responseText)
      json.forEach((el) => {
        li = document.createElement('li')
        li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
        fragment.appendChild(li)
      })

      xhrEl.appendChild(fragment)
    } else {
      console.warn('error')
      message = xhr.statusText || 'An error occurred'
      xhrEl.innerHTML = `Error ${xhr.status}: ${message}`
    }
  })

  xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

  xhr.send()
})()

//^ API Fetch
;(() => {
  console.log('API Fetch')
  const $fetch = document.getElementById('fetch'),
    fragment = document.createDocumentFragment()

  let message, li

  //the default method is GET
  fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      //!console.log(res) //API response
      //return res.text() //for text / html / xml
      //return res.blob() //for non text content
      //retur res.json() //for JSON
      return res.ok ? res.json() : Promise.reject(res)
    })
    .then((json) => {
      //!console.log(json) //API response after being parsed

      json.forEach((el) => {
        li = document.createElement('li')
        li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
        fragment.appendChild(li)
      })

      $fetch.appendChild(fragment)
    })
    .catch((err) => {
      console.warn('Error')
      message = err.statusText || 'An error occurred'
      $fetch.innerHTML = `Error ${err.status}: ${message}`
    })
    .finally(() => {
      console.log('This code gonna be executed')
    })
})()

//^API Fetch - async await control
;(() => {
  console.log('API Fetch Async-Await control')
  const fetchAsync = document.getElementById('fetch-async'),
    fragment = document.createDocumentFragment()

  let li

  async function getData() {
    try {
      let res = await fetch('https://jsonplaceholder.typicode.com/users'),
        json = await res.json()
      if (!res.ok) throw { status: res.status, statusText: res.statusText }

      json.forEach((el) => {
        li = document.createElement('li')
        li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
        fragment.appendChild(li)
      })

      fetchAsync.appendChild(fragment)
    } catch (err) {
      console.warn('Error', err)
      fetchAsync.innerHTML = `Error ${err.status}: ${err.statusText}`
    } finally {
    }
  }
  getData()
})()

//^Axios - axios library
;(() => {
  const $axios = document.getElementById('axios'),
    fragment = document.createDocumentFragment()

  let li

  axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      let json = res.data

      json.forEach((el) => {
        li = document.createElement('li')
        li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
        fragment.appendChild(li)
      })

      $axios.appendChild(fragment)
    })
    .catch((err) => {
      console.log(err.response)
      let message = err.response.statusText || 'An error occurred'
      $axios.innerHTML = `Error ${err.response.status} : ${message}`
    })
    .finally(console.log('Axios: ', axios))
})()

//^Axios - axios library - asunc await control
;(() => {
  const $axios = document.getElementById('axios-async'),
    fragment = document.createDocumentFragment()

  let li

  axios.get('https://jsonplaceholder.typicode.com/users')

  async function getData() {
    try {
      let res = await axios.get('https://jsonplaceholder.typicode.com/users'),
        json = await res.data

      json.forEach((el) => {
        li = document.createElement('li')
        li.innerHTML = `${el.name} -- ${el.email} -- ${el.phone}`
        fragment.appendChild(li)
      })

      $axios.appendChild(li)
    } catch (err) {
      console.log(err.response)
      let message = err.response.statusText || 'An error occurred'
      $axios.innerHTML = `Error ${err.response.status}: ${message}`
    } finally {
    }
  }

  getData()
})()
