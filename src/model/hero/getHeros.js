const axios = require('axios')

const { urls } = require('../../../config.json')

module.exports = async function getHeros(id, axiosOptions) {
  return axios.get(urls.heroPrefix, axiosOptions)
}
