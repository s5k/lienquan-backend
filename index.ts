require('dotenv').config()
import errorMiddleware from './middlewares/error.middleware'

import express from 'express'
import cors from 'cors'
import apiRoutes from './routes/api'

const app = express()

app.use(cors())

app.use(express.static('public'))

app.use(express.json())

app.use('/api/v1', apiRoutes)

// Error Handler Middleware
app.use(errorMiddleware)

export default app