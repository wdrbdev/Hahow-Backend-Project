const { errors } = require('../../config.json')
const HttpError = require('./HttpError')

/*
 * Error for resource not found
 */
module.exports = class NotFoundError extends HttpError {
  /*
   * @constructor
   * @param [string] param - the resource which cannot be found 
   */
  constructor(resourse) {
    const msg =
      typeof resourse === 'string' && resourse
        ? `${errors.notFound.msg}: ${resourse}`
        : errors.notFound
    const status = errors.notFound.status
    super(msg, status)
  }
}
