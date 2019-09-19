//import all the types we have ( feedback for now )
const { buildSchema } = require("graphql");

module.exports = buildSchema(`
  type Feedback {
    _id: ID!
    content: String
  }

  type RootQuery {
    feedbacks: [Feedback!]
  }

  type RootMutation {
    createFeedback(content: String): Feedback
  }

  schema{
    query: RootQuery
    mutation: RootMutation
  }
`);
