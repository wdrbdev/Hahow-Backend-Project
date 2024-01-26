const axios = require('axios')

const { urls } = require('../../../config.json')
const validateId = require('../../util/validateId')

/*
 * Get hero profile object according to given id by third-party API
 * @param [string] id - hero ID
 */
module.exports = async function getHeroProfileById(id) {
  validateId(id)

  const url = `${urls.heroPrefix}/${id}/profile`
  const { data: profile } = await axios.get(url)
  return profile 
}
