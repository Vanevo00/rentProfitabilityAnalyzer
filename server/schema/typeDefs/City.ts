import gql from 'graphql-tag'

export default gql`
  type City {
      id: ID!
      name: String!
      country: String!
      county: County!
      district: District!
      population: Int!
      mainImageLink: String
      popularity: Int
      created: Date!
  }
  
  extend type Query {
      getCities(
          paginator: Paginator
          sorting: Sorting
      ): [City]
  }
  
  extend type Mutation {
      addCity(
          name: String!
          country: String!
          county: ID!
          district: ID!
          population: Int!
          mainImageLink: String
          popularity: Int
      ): City
  }
`
