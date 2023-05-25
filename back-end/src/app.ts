import cors from 'cors'
import express from 'express'
import 'express-async-errors'
import 'reflect-metadata'
import { handleError } from './errors/handle.error'
import { userRoutes } from './routes/user.routes'

const app = express()

app.use( cors() )
app.use( express.json() )

app.use('/user', userRoutes)

app.use( handleError )

export { app }
