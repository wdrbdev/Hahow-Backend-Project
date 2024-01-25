const isIntegerStr = require('./isIntegerStr')
const InvalidParamError = require('../error/InvalidParamError')

module.exports = function validateId(idStr) {
  if (!idStr || typeof idStr !== 'string' || !isIntegerStr(idStr)) {
    throw new InvalidParamError(`id: '${idStr}'`)
  }
}
