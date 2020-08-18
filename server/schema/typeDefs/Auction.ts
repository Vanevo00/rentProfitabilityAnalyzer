import gql from 'graphql-tag'

export default gql`  
    type Auction {
        id: ID!
        address: String
        squareMeters: Int
        startingPriceCZK: Int!
        estimatedPriceCZK: Int
        startingPricePerMeter: Int
        estimatedPricePerMeter: Int
        minimalBidCZK: Int
        depositCZK: Int
        nearbyPurchases: [NearbyPurchase]
        dispositions: String
        city: City!
        neighbourhood: Neighbourhood
        voluntary: Boolean
        starts: String
        auctioneer: String
        mainImage: String
        links: [String]
        created: String
        updated: String
    }

    extend type Query {
        getAuctions(
            paginator: Paginator
        ): [Auction]
    }

    extend type Mutation {
        addAuction(
            startingPriceCZK: Int!
            city: ID!
            starts: String!
            address: String
            squareMeters: Int
            estimatedPriceCZK: Int
            minimalBidCZK: Int
            depositCZK: Int
            dispositions: String
            neighbourhood: ID
            voluntary: Boolean
            auctioneer: String
            mainImage: String
            links: [String]
        ): Auction
    }
`
