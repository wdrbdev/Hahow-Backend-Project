const axios = require('axios')

const { urls } = require('../../config.json')
/*
 * authenticate by third-party API
 * @param [string] name - Account
 * @param [string] password
 * @throws Will throw when authentication fails
 */
module.exports = function authenticate(name, password) {
  axios.post(urls.auth, {
    name,
    password
  })
}
