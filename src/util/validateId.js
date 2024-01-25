const InvalidParamError = require('../error/InvalidParamError')

module.exports = function validateId(idStr) {
  if (!idStr || typeof idStr !== 'string' || !_isIntegerStr(idStr)) {
    throw new InvalidParamError(`id: '${idStr}'`)
  }
}

function _isIntegerStr(str) {
  if (typeof str !== 'string') {
    return false
  }
  return parseInt(str) !== NaN && parseInt(str) === parseFloat(str)
}
