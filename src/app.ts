import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'

dotenv.config()

import notes from './components/notes/index'

const PORT = 3001

const app = express()
app.use(cors())
app.use('/notes', notes)

app.get('/', (req, res) => {
  res.send('Hello World')
})

// app.get('/notes', async (req, res, next) => {
//   console.log('get', req)
//   await query('SELECT * FROM notes', [], (err, result) => {
//     if (err) {
//       console.log('err')
//     } else {
//       console.log(result)
//       res.send({ test: 'It Works' })
//     }
//   })
// })

// app.post('/notes/', (req, res, next) => {
//   console.log('post', req)
//   res.send({ test: 'It Works' })
// })

// app.patch('/notes/:id', (req, res, next) => {
//   console.log('get', req)
//   res.send({ test: 'It Works' })
// })

// app.delete('/notes/:id', (req, res, next) => {
//   console.log('get', req)
//   res.send({ test: 'It Works' })
// })

app.listen(PORT, () => {
    return console.log(`Express listening at http://localhost:${PORT}`)
})

export default app