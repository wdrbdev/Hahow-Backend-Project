const { errors } = require('../../config.json')
const HttpError = require('./HttpError')

/*
 * Error for invalid input/outout 
 */
module.exports = class InvalidParamError extends HttpError {
  /*
   * @constructor
   * @param [string] param - the invalid intput/output name and value
   */
  constructor(param) {
    const msg =
      typeof param === 'string' && param
        ? `${errors.invalidParam.msg}: ${param}`
        : errors.invalidParam
    const status = errors.invalidParam.status
    super(msg, status)
  }
}
