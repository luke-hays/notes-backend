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

export {query}