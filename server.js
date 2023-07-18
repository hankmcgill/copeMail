const express = require('express')
const app = express()
const PORT = 3000

app.use('/', (req, res) => {
  res.status(200).json('all good')
})

app.listen(PORT, console.log(`listening on ${PORT}`))
