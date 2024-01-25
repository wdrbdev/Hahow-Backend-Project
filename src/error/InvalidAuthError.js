const { errors } = require('../../config.json')
const HttpError = require('./HttpError')

module.exports = class InvalidParamError extends HttpError {
  constructor(param) {
    const msg =
      typeof param === 'string' && param
        ? `${errors.invalidAuth.msg}: ${param}`
        : errors.invalidAuth
    const statusCode = errors.invalidAuth.statusCode
    super(msg, statusCode)
  }
}
