const d = document
/**
 * This function handle errors from fetch API requests
 * @param toFetch Request path
 * @param resFormat Response format valid values: 'text' 'json' 'blob'
 * @param parsedRes Handling the parsed response format
 * @param errHand Optional for custom error handling
 */
async function fetching(toFetch, resFormat, parsedRes, errHand = false) {
  try {
    let response = await fetch(toFetch),
      res
    if (!response.ok)
      throw { status: response.status, statusText: response.statusText }

    if (resFormat === 'text') res = await response.text()
    if (resFormat === 'blob') res = await response.blob()
    if (resFormat === 'json') res = await response.json()

    parsedRes(res)
  } catch (e) {
    errHand !== false ? errHand(e) : console.warn('Error while fetching', e)
  }
}
/**
 * USE THIS ON CATCH ERRORS ONLY
 * @param err console.error(err)
 * @param htmlElement htmlElement.innerHTML = `<p>Error ${err.status || 'Unknown'}: ${err.statusText || 'An error has ocurred'}</p>`
 */
function errHandler(err, htmlElement, errHand = false) {
  console.error(err)
  htmlElement.innerHTML = `<p>Error ${err.status || 'Unknown'}: ${
    err.statusText || 'An error has ocurred'
  }</p>`

  if (errHand !== false) errHand(err)
}
