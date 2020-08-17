import gql from 'graphql-tag'

export default gql`
    type RealEstateLink {
        id: ID!
        link: String!
        scraped: Boolean!
        website: RealEstateWebsite
    }

    extend type Query {
        getRealEstateLinks(
            paginator: Paginator
        ): [RealEstateLink]
    }

    extend type Mutation {
        addRealEstateLink(
            link: String!
            website: ID!
        ): RealEstateLink
    }
`
