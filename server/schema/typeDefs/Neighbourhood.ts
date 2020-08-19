import gql from 'graphql-tag'

export default gql`
    type Neighbourhood {
        id: ID!
        name: String!
        city: City!
        created: Date!
    }

    extend type Query {
        getNeighbourhoods(
            paginator: Paginator
        ): [Neighbourhood]
    }

    extend type Mutation {
        addNeighbourhood(
            name: String!
            city: ID!
        ): Neighbourhood
    }
`
