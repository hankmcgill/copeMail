const express = require('express')
const app = express()
const PORT = 3000
const auth = require('./controllers/authController')

app.use(express.json())

// main GET route handler for possible front end
app.get('/', (req, res) => {
  return res.status(200).json('all good')
})

// route handler for email signup/auth/etc
app.use('/email', auth.checkIfValidEmail, (req, res) => {
  return res.status(200).json('email successfully registered')
})

// 404 bad req error handler
app.use('/*', (req, res) => {
  return res.status(404).send('yikes, something went wrong :/')
})

// Global/catch-all error handler
app.use((err, req, res, next) => {
  return res.status(err.status).send(err.msg)
})

app.listen(PORT, console.log(`listening on ${PORT}`))
