import express, { Request, Response } from 'express';
import DB from "./db";

const app = express()
const port = 3000

const db = new DB('data/species.json')

app.get('/', (_: Request, res: Response) => {
  res.send("I'm alive!")
})

app.get('/api/v1/species/', (_: Request, res: Response) => {
  //TODO Add Logging
  const data = db.get()
  if (data) res.json(db.get())
  else res.status(500).send('Something broke!')
})

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})
