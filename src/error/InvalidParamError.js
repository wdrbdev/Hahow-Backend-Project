const { errors } = require('../../config.json')
const HttpError = require('./HttpError')

module.exports = class InvalidParamError extends HttpError {
  constructor(param) {
    const msg =
      typeof param === 'string' && param
        ? `${errors.invalidParam.msg}: ${param}`
        : errors.invalidParam
    const status = errors.invalidParam.status
    super(msg, status)
  }
}
