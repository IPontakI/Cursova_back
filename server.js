import cors from 'cors'
import express from 'express'
import mongoose from 'mongoose'
import { getAll } from './newsController.js'

mongoose
  .connect(process.env.mongoDB)
  .then(() => {
    console.log('DB OK')
  })
  .catch((err) => console.log('DB error', err))

const app = express()
app.use(express.json())
app.use(cors())
app.use('/assets', express.static('assets'))

app.get('/', (req, res) => {
  return res.json('Privit')
})

app.get('/posts', getAll)

app.listen(process.env.PORT || 8081, () => {
  console.log('listening')
})
