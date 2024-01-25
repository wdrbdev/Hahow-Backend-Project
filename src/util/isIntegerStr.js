module.exports = function isIntegerStr(str) {
  if (typeof str !== 'string') {
    return false
  }
  return parseInt(str) !== NaN && parseInt(str) === parseFloat(str)
}
