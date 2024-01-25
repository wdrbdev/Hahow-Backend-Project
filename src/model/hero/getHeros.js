const axios = require('axios')

const { urls } = require('../../../config.json')

module.exports = async function getHeros() {
  return axios.get(urls.heroPrefix)
}
