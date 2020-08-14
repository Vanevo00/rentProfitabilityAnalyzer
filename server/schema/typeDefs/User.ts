import gql from 'graphql-tag'

export default gql`
    type User {
        id: ID!
        email: String!
        password: String!
        name: String
        isAdmin: Boolean!
        activated: Boolean!
        favoriteFlats: [Flat]
        created: String
        updated: String
    }

    extend type Query {
        getUsers: [User]
    }

    extend type Mutation {
        registerUser(
            email: String!
            password: String!
            name: String
        ): User
    }
`
