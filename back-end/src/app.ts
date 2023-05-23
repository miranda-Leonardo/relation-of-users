import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'
import { handleError } from './errors/handle.error'

const app = express()
app.use( express.json() )

app.use( handleError )

export { app }
