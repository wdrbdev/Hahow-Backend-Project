const { AxiosError } = require('axios')
const HttpError = require('../error/HttpError')

module.exports = function errorHandler(err, req, res, next) {
  if (err instanceof HttpError) {
    res.status(err.status).json({
      error: err.msg
    })
    return
  }
  if (err instanceof AxiosError) {
    res.status(err.response?.status ?? 500).json({
      error: err.response?.data || err.message
    })
    return
  }
  res.status(HttpError.defaultMsg).json({
    error: HttpError.defaultStatus
  })
}
