import express from 'express'

const PORT = 3001

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(PORT, () => {
    return console.log(`Express listening at http://localhost:${PORT}`)
})

export default app