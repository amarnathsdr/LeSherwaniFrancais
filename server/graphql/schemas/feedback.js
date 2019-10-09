const { gql } = require("apollo-server-express");

module.exports = gql(`
  type Feedback {
    _id: ID!
    content: String
  }

  type Query {
    feedbacks: [Feedback!]
  }

  type Mutation {
    createFeedback(content: String): Feedback
  }

  schema {
    query: Query
    mutation: Mutation
  }
`);
