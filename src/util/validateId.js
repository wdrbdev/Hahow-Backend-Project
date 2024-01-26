const InvalidParamError = require('../error/InvalidParamError')

const numRegex = /^\d+$/

/*
 * Validate ID string
 * A ID must be an positive integer string
 * @param [string] idStr - ID string
 */
module.exports = function validateId(idStr) {
  if (!idStr || typeof idStr !== 'string' || !numRegex.test(idStr) || parseInt(idStr) == 0) {
    throw new InvalidParamError(`id: '${idStr}'`)
  }
}
