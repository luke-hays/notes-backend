import {Pool, QueryResult} from "pg";

type callback = (err: Error, result: QueryResult<any>) => void

const pool = new Pool()

const query = (text : string, params: any, cb: callback) => {
  return pool.query(text, params, cb)
}

export {query}