import gql from 'graphql-tag'

export default gql`
    type RealEstateWebsite {
        id: ID!
        name: String!
        domain: String!
        created: Date!
    }

    extend type Query {
        getRealEstateWebsites(
            paginator: Paginator
        ): [RealEstateWebsite]
    }

    extend type Mutation {
        addRealEstateWebsite(
            name: String!
            domain: String!
        ): RealEstateWebsite
    }
`
