import gql from 'graphql-tag'

export default gql`
    type District {
        id: ID!
        name: String!
    }
    
    extend type Query {
        findDistrictByName(
            name: String!
        ): District
    }
    
    extend type Mutation {
        addDistrict(
            name: String!
        ): District
    }
`
