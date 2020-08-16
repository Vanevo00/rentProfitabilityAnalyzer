import gql from 'graphql-tag'

export default gql`
    type RealEstateWebsite {
        id: ID!
        name: String!
        domain: String!
    }

    extend type Query {
        getRealEstateWebsites: [RealEstateWebsite]
    }

    extend type Mutation {
        addRealEstateWebsite(
            name: String!
            domain: String!
        ): RealEstateWebsite
    }
`
