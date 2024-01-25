const axios = require('axios')

const { urls } = require('../../../config.json')
const validateId = require('../../util/validateId')

module.exports = async function getHeroById(id) {
  validateId(id)

  const url = `${urls.heroPrefix}/${id}`
  return axios.get(url)
}
