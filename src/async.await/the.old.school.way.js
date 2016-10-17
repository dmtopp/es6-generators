import 'whatwg-fetch'

export const theOldSchoolWay = () => {
  return fetch('http://ron-swanson-quotes.herokuapp.com/v2/quotes')
    .then(response => {
      if (response.ok) return response.text()
      else throw new Error(response.status)
    }).then(quote => {
      console.log(quote)
    }).catch(error => {
      console.log(error)
    })
}
