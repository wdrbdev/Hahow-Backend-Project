const InvalidParamError = require('../error/InvalidParamError')

module.exports = function validateHero(hero) {
  if(!hero || typeof hero.id !== 'string') {
    throw new InvalidParamError(`hero '${JSON.stringify(hero)}'`)
  }
}
