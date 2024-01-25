const axios = require('axios')

const { urls } = require('../../../config.json')
const validateId = require('../../util/validateId')

module.exports = function getHeroById(id) {
  validateId(id)

  const url = `${urls.heroPrefix}/${id}/profile`
  return axios.get(url)
}
