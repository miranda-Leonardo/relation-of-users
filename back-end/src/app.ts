import 'reflect-metadata'
import 'express-async-errors'
import express from 'express'
import { handleError } from './errors/handle.error'
import { userRoutes } from './routes/user.routes'

const app = express()
app.use( express.json() )

app.use('/user', userRoutes)

app.use( handleError )

export { app }
