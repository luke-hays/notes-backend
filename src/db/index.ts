import {Pool, QueryResult} from "pg";

interface queryArgs {
  text: string,
  params: any,
  callback: (err: Error, result: QueryResult<any>) => void
}

const pool = new Pool()

const query = ({text, params, callback} : queryArgs) => {
  return pool.query(text, params, callback)
}

export {query}