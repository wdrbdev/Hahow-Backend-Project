const axios = require('axios')

const { urls } = require('../../config.json')
const InvalidAuthError = require('../error/InvalidAuthError')

/*
 * authenticate by third-party API
 * @param [string] name - Account
 * @param [string] password
 * @throws Will throw when authentication fails
 */
module.exports = function authenticate(name, password) {
  try {
    axios.post(urls.auth, {
      name,
      password
    })
  } catch (e) {
    console.log(e)
    throw new InvalidAuthError()
  }
}
