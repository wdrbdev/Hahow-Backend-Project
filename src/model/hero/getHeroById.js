const axios = require('axios')

const { urls } = require('../../../config.json')

module.exports = async function getHeroById(id, axiosOptions) {
  const url = `${urls.heroPrefix}/${id}`
  return axios.get(url, axiosOptions)
}
