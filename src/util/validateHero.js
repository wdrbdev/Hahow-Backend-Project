const InvalidParamError = require('../error/InvalidParamError')

/*
 * Validate hero object
 * A hero object should contain `id` field
 * @param [Object] hero
 */
module.exports = function validateHero(hero) {
  if(!hero || typeof hero.id !== 'string') {
    throw new InvalidParamError(`hero '${JSON.stringify(hero)}'`)
  }
}
