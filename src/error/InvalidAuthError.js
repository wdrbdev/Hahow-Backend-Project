const { errors } = require('../../config.json')
const HttpError = require('./HttpError')

module.exports = class InvalidAuthError extends HttpError {
  constructor() {
    const msg = errors.invalidAuth.msg
    const status = errors.invalidAuth.status
    super(msg, status)
  }
}
