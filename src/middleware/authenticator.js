const authenticate = require('../auth/authenticate')
const InvalidAuthError = require('../error/InvalidAuthError')

module.exports = async function authenticator(req, res, next) {
  try {
    const name = req.get('Name')
    const password = req.get('Password')
    await authenticate(name, password)
    next()
  } catch (e) {
    next(new InvalidAuthError())
  }
}
