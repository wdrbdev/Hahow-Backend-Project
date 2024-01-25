const { errors } = require('../../config.json')
const HttpError = require('./HttpError')

module.exports = class InvalidParamError extends HttpError {
  constructor(param) {
    const msg =
      typeof param === 'string' && param
        ? `${errors.notFound.msg}: ${param}`
        : errors.notFound
    const statusCode = errors.notFound.statusCode
    super(msg, statusCode)
  }
}
