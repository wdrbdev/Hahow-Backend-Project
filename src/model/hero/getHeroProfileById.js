const axios = require('axios')

const { urls } = require('../../../config.json')
const validateId = require('../../util/validateId')

module.exports = async function getHeroProfileById(id) {
  validateId(id)

  const url = `${urls.heroPrefix}/${id}/profile`
  const { data: profile } = await axios.get(url)
  return profile 
}
