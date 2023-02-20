import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'

dotenv.config()

import {Pool, QueryResult} from "pg";

type callback = (err: Error, result: QueryResult<any>) => void

const pool = new Pool({
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT),
  host: process.env.PGHOST
})

const query = async (text : string, params: any, cb: callback) => {
  try {
    return await pool.query(text, params, cb)
  } catch(error) {
    console.log(error)
  }
}

const PORT = 3001

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.get('/notes', (req, res, next) => {
  console.log('get', req)
  pool.query('SELECT * FROM notes', [], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      // console.log(result)
    }
  })
  res.send({ test: 'It Works' })
})

app.post('/notes/', (req, res, next) => {
  console.log('post', req)
  res.send({ test: 'It Works' })
})

app.patch('/notes/:id', (req, res, next) => {
  console.log('get', req)
  res.send({ test: 'It Works' })
})

app.delete('/notes/:id', (req, res, next) => {
  console.log('get', req)
  res.send({ test: 'It Works' })
})

app.listen(PORT, () => {
    return console.log(`Express listening at http://localhost:${PORT}`)
})

export default app