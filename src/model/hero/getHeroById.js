const axios = require('axios')

const { urls } = require('../../../config.json')
const validateId = require('../../util/validateId')
const validateHero = require('../../util/validateHero')
const HttpError = require('../../error/HttpError')

module.exports = async function getHeroById(id) {
  validateId(id)

  const url = `${urls.heroPrefix}/${id}`
  const { data: hero } = await axios.get(url)
  try {
    validateHero(hero)
  } catch (e) {
    console.error(e)
    throw new HttpError()
  }
  return hero
}
