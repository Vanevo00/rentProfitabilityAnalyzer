import express from 'express'
import cors from 'cors'
import connectDB from './config/db'
import { ApolloServer } from 'apollo-server-express'
import schema from './schema'

const server = new ApolloServer({ schema })
const app = express()
server.applyMiddleware({ app })
const port = 8999

connectDB()

app.use(express.json()) // to accept body data
app.options('/', cors()) // CORS pre-flight
app.use(cors()) // enable CORS

app.get('/', (req, res) => res.send('Welcome to Rent Profitability Analyzer'))

app.listen(port, () => console.log(`API listening on port ${port}`))
