const { errors } = require('../../config.json')

module.exports = class HttpError extends Error {
  static defaultMsg = errors.httpError.msg
  static defaultStatus = errors.httpError.status
  constructor(msg, status) {
    super(msg)
    this.msg = typeof msg === 'string' && msg ? msg : HttpError.defaultMsg
    this.status = typeof status === 'number' ? status : HttpError.defaultStatus
  }
}
