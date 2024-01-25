const { errors } = require('../../config.json')
const HttpError = require('./HttpError')

module.exports = class NotFoundError extends HttpError {
  constructor(resourse) {
    const msg =
      typeof resourse === 'string' && resourse
        ? `${errors.notFound.msg}: ${resourse}`
        : errors.notFound
    const status = errors.notFound.status
    super(msg, status)
  }
}
