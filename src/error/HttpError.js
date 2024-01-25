const { errors } = require('../../config.json')

module.exports = class HttpError extends Error {
  constructor(msg, statusCode) {
    super(msg)
    this.msg = typeof msg === 'string' && msg ? msg : errors.httpError.msg
    this.statusCode =
      typeof statusCode === 'number' ? statusCode : errors.httpError.statusCode
  }
}
