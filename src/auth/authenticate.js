const axios = require('axios')

const { urls } = require('../../config.json')

module.exports = function authenticate(name, password) {
  return axios.post(urls.auth, {
    name,
    password
  })
}
