const { errors } = require('../../config.json')

/*
 * Basic error class with HTTP status code
 */
module.exports = class HttpError extends Error {
  static defaultMsg = errors.httpError.msg
  static defaultStatus = errors.httpError.status
  /*
   * @constructor
   * @param [string] msg - Error message
   * @param [number] status - HTTP status code
   */
  constructor(msg, status) {
    super(msg)
    this.msg = typeof msg === 'string' && msg ? msg : HttpError.defaultMsg
    this.status = typeof status === 'number' ? status : HttpError.defaultStatus
  }
}
