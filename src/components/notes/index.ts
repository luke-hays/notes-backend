import express, { Router, Request, Response } from "express";
import { query } from "../../db"

const router: Router = express.Router();

router.get('/', async (req: Request, res: Response) => {
  await query('SELECT * FROM notes', [], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(result)
      res.send({ content: result.rows })
    }
  })
})

router.post('/', async (req: Request, res: Response) => {
  const {content, summary} = req.body
  const parameterizedQuery = 'INSERT INTO notes(CONTENT, SUMMARY, CREATED_DATE) VALUES($1, $2, $3)'

  await query(parameterizedQuery, [content, summary, new Date()], (err, result) => {
    if (err) {
      console.log(err)
    }
  })

  res.send('Implementation Pending')
})

router.put('/', async (req: Request, res: Response) => {
  console.log(req.body)
  res.send('Implementation Pending')
})

router.delete('/', async (req: Request, res: Response) => {
  console.log(req.body)
  res.send('Implementation Pending')
})

export default router;