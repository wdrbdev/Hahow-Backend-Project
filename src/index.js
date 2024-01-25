const app = require('./app')
const { port } = require('../config.json')

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
