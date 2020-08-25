import gql from 'graphql-tag'

export default gql`
    type UserActivation {
        id: ID!
        activationCode: String!
        user: User
        created: Date!
    }

    extend type Query {
        findUserActivationByActivationCode(
            activationCode: String!
        ): UserActivation
    }

    extend type Mutation {
        createUserActivation(
            user: ID!
        ): UserActivation
    }
`
