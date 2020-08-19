import gql from 'graphql-tag'

export default gql`
    type NearbyPurchase {
        address: String
        squareMeters: String
        pricePerMeter: Int
    }
  
    type Flat {
        id: ID!
        address: String!
        squareMeters: Int!
        priceCZK: Int!
        pricePerMeter: Int!
        nearbyPurchases: [NearbyPurchase]
        dispositions: String
        links: [String]
        mainImage: String
        floor: Int
        lift: Boolean
        agency: String
        contact: String
        ownershipType: String
        monthlyExpensesAssociation: Int
        monthlyExpensesOther: Int
        parking: Boolean
        balcony: Boolean
        garden: Boolean
        heating: String
        publicTransport: String
        mortgaged: Boolean
        notes: String
        neighbourhood: Neighbourhood
        city: City!
        created: Date!
        updated: String
    }

    extend type Query {
        getFlats(
            paginator: Paginator
            sorting: Sorting
        ): [Flat]
    }

    extend type Mutation {
        addFlat(
            address: String!
            squareMeters: Int!
            priceCZK: Int!
            city: ID!
            dispositions: String
            links: [String]
            mainImage: String
            floor: Int
            lift: Boolean
            agency: String
            contact: String
            ownershipType: String
            monthlyExpensesAssociation: Int
            monthlyExpensesOther: Int
            parking: Boolean
            balcony: Boolean
            garden: Boolean
            heating: String
            publicTransport: String
            mortgaged: Boolean
            notes: String
            neighbourhood: ID
        ): Flat
    }
`
