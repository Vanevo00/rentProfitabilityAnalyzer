import express from 'express'
import cors from 'cors'
import connectDB from './config/db'
import { ApolloServer, gql } from 'apollo-server-express'

const typeDefs = gql`
  type Query {
      hello: String
  }
`

const resolvers = {
  Query: {
    hello: () => 'Hello World!'
  }
}

const server = new ApolloServer({ typeDefs, resolvers })
const app = express()
server.applyMiddleware({ app })
const port = 8999

connectDB()

// middleware
app.use(express.json()) // to accept body data
app.options('/', cors()) // CORS pre-flight
app.use(cors()) // enable CORS

app.get('/', (req, res) => res.send('Welcome to Rent Profitability Analyzer'))

app.listen(port, () => console.log(`API listening on port ${port}`))
