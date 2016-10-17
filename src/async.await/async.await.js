import 'whatwg-fetch'

export async function theNewSchoolWay() {
  try {
    let response = await fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    if (response.ok) {
      let text = await response.text()
      console.log(text)
    } else {
      throw new Error(`${response.status} ${response.statusText}`)
    }
  } catch (error) {
    console.log(error)
  }
}
