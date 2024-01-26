const { errors } = require('../../config.json')
const HttpError = require('./HttpError')

/*
 * Error for authentication fails
 */
module.exports = class InvalidAuthError extends HttpError {
  constructor() {
    const msg = errors.invalidAuth.msg
    const status = errors.invalidAuth.status
    super(msg, status)
  }
}
