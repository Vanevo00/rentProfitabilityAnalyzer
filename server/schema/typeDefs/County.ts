import gql from 'graphql-tag'

export default gql`
    type County {
        id: ID!
        name: String!
    }

    extend type Query {
        findCountyByName(
            name: String!
        ): County
    }

    extend type Mutation {
        addCounty(
            name: String!
        ): County
    }
`
