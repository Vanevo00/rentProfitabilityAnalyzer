import gql from 'graphql-tag'

export default gql`
  type City {
      id: ID!
      name: String!
      country: String!
      mainImageLink: String
      popularity: Int
      created: Date!
  }
  
  extend type Query {
      getCities(
          paginator: Paginator
      ): [City]
  }
  
  extend type Mutation {
      addCity(
          name: String!
          country: String!
          mainImageLink: String
          popularity: Int
      ): City
  }
`
