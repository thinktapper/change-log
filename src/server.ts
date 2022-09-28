import express from 'express'
import router from './router'
import morgan from 'morgan'
import cors from 'cors'
import { protect } from './modules/auth'

const app = express()

app.use(cors())
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  // req.shhhSecret = 'hi'

  res.status(401)
  res.send('nah')
})
app.get('/', (req, res) => {
  console.log('hello from server')
  res.status(200)
  res.json({ message: 'hello from server' })
})

app.use('/api', protect, router)

export default app
