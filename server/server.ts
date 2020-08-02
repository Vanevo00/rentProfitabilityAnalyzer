import express from 'express'
import cors from 'cors'
import connectDB from './config/db'

const app = express()
const port = 8999

connectDB()

// middleware
app.use(express.json()) // to accept body data
app.options('/', cors()) // CORS pre-flight
app.use(cors()) // enable CORS

app.get('/', (req, res) => res.send('Welcome to Rent Profitability Analyzer'))

app.listen(port, () => console.log(`API listening on port ${port}`))
