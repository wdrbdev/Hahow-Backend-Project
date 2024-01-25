const axios = require('axios')

const { urls } = require('../../../config.json')
const InvalidParamError = require('../../error/InvalidParamError')

module.exports = function getHeroById(id, axiosOptions) {
  const url = `${urls.heroPrefix}/${id}/profile`
  return axios.get(url, axiosOptions)
}
