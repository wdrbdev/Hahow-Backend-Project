const InvalidParamError = require('../error/InvalidParamError')

const numRegex = /^\d+$/
module.exports = function validateId(idStr) {
  if (!idStr || typeof idStr !== 'string' || !numRegex.test(idStr) || parseInt(idStr) == 0) {
    throw new InvalidParamError(`id: '${idStr}'`)
  }
}
