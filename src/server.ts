import express from 'express'

const app = express()

app.get('/', (req, res) => {
  console.log('hello from server')
  res.status(200)
  res.json({ message: 'hello from server' })
})

module.exports = app
