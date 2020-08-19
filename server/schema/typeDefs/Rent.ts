import gql from 'graphql-tag'

export default gql`  
    type Rent {
        id: ID!
        address: String!
        squareMeters: Int!
        rentCZK: Int!
        rentPerMeter: Int!
        city: City!
        neighbourhood: Neighbourhood
        dispositions: String!
        link: String
        created: Date!
    }

    extend type Query {
        getRents(
            paginator: Paginator
            sorting: Sorting
        ): [Rent]
    }

    extend type Mutation {
        addRent(
            address: String!
            squareMeters: Int!
            rentCZK: Int!
            city: ID!
            neighbourhood: ID
            dispositions: String!
            link: String
        ): Rent
    }
`
