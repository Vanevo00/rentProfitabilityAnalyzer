import express from 'express'
import cors from 'cors'
import connectDB from './config/db'
import { ApolloServer, gql } from 'apollo-server-express'
import { City } from './models'

const typeDefs = gql`
  type City {
      id: ID!
      name: String!
      country: String!
      mainImageLink: String
      popularity: Int
  }
  
  type Query {
      getCities: [City]
  }
  
  type Mutation {
      addCity(
          name: String!
          country: String!
          mainImageLink: String
          popularity: Int
      ): City
  }
`

const resolvers = {
  Query: {
    getCities: async () => await City.find({}).exec()
  },
  Mutation: {
    addCity: async (_, args: any) => {
      try {
        const popularity = args.popularity || 0
        return await City.create({
          ...args,
          popularity
        })
      } catch (err) {
        console.error(err)
      }
    }
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
