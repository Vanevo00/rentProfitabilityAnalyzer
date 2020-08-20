import gql from 'graphql-tag'

export default gql`
    type District {
        id: ID!
        name: String!
    }
    
    extend type Mutation {
        addDistrict(
            name: String!
        ): District
    }
`
