import app from '../app'
import * as db from '../db/index'

app.get('/:id', (req, res, next) => {
  db.query('SELECT * FROM notes WHERE id = $1', [req.params.id], (err, result) => {
    if (err) {
      return next(err)
    }
    res.send(result.rows[0])
  })
})