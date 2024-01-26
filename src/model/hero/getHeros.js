const axios = require('axios')

const { urls } = require('../../../config.json')
const validateHero = require('../../util/validateHero')

/*
 * Get array of hero objects according to given id by third-party API
 */
module.exports = async function getHeros() {
  const { data: heros } = await axios.get(urls.heroPrefix)
  try {
    for (const hero of heros) {
      validateHero(hero)
    }
  } catch (e) {
    console.error(e)
    throw new HttpError()
  }
  return heros
}
