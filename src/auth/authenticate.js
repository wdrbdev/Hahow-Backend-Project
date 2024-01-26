const axios = require('axios')

const { urls } = require('../../config.json')

module.exports = function authenticate(name, password) {
  axios.post(urls.auth, {
    name,
    password
  })
}
