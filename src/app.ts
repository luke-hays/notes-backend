import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'
import notes from './components/notes/index'

dotenv.config()

const PORT = Number(process.env.SERVERPORT)
const app = express()

app.use(cors())
app.use(express.json())

app.use('/notes', notes)

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
    return console.log(`Express listening at http://localhost:${PORT}`)
})

export default app