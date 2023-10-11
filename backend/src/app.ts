import express, { Request, Response } from 'express';
import Loader from "./loader";
import cors from "cors";
import pino from 'pino-http'

const app = express()

app.use(cors())
app.use(pino())

const loader = new Loader('data/species.json')

app.get('/', (_: Request, res: Response) => {
  res.send("I'm alive!")
})

app.get('/api/v1/antelopes/', (req: Request, res: Response) => {
  const data = loader.get()
  if (data) res.json(loader.get())
  else res.status(500).send('Something broke!')
})

export default app
