const express = require("express");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const { buildSchema } = require("graphql");
const mongoose = require("mongoose");

const Feedback = require("./models/feedback");

const app = express();

app.use(bodyParser.json());

app.use(
  "/graphql",
  graphqlHttp({
    schema: buildSchema(`
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
    `),
    rootValue: {
      feedbacks: () => {
        return Feedback.find()
          .then(feedbacks => {
            return feedbacks.map(feedback => {
              console.log("feed", feedback);
              return { ...feedback._doc };
            });
          })
          .catch(err => {
            throw err;
          });
      },
      createFeedback: args => {
        const feedback = new Feedback({
          content: args.content
        });
        return feedback
          .save()
          .then(result => {
            console.log(result);
            return { ...result._doc };
          })
          .catch(err => {
            console.log(err);
          });
      }
    },
    graphiql: true
  })
);

mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USER}:${
      process.env.MONGO_PASSWORD
    }@cluster0-rsdbl.mongodb.net/${
      process.env.MONGO_DB
    }?retryWrites=true&w=majority`
  )
  .then()
  .catch(err => {
    console.log(err);
  });

app.listen(4000);
