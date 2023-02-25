import { query } from "../../db"

import express, { Router, Request, Response } from "express";

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  console.log('get', req)
  await query('SELECT * FROM notes', [], (err, result) => {
    if (err) {
      console.log('err')
    } else {
      console.log(result)
      res.send({ test: 'It Works' })
    }
  })
})

export default router;