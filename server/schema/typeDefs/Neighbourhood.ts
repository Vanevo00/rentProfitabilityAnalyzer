import gql from 'graphql-tag'

export default gql`
    type Neighbourhood {
        id: ID!
        name: String!
        city: City!
    }

    extend type Query {
        getNeighbourhoods: [Neighbourhood]
    }

    extend type Mutation {
        addNeighbourhood(
            name: String!
            city: ID!
        ): Neighbourhood
    }
`
