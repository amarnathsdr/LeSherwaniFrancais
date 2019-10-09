const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const graphqlHttp = require("express-graphql");
const { ApolloServer, gql } = require("apollo-server-express");

require("./config");
const Feedback = require("./models/feedback");
const typeDefs = require("./graphql/schemas/feedback");
const resolvers = require("./graphql/resolvers/feedback");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text({ type: "application/graphql" }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST,GET,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-type, Authorization");
  if (req.method === "OPTIONS") {
    return res.sendStatus(200);
  }
  next();
});

const schema = new ApolloServer({
  typeDefs,
  resolvers,
  introspection: true,
  playground: true
});

schema.applyMiddleware({ app });

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "../client/build/index.html"));
  });
}

app.listen(process.env.PORT || 4000, () => {
  console.log(`Server started on port: ${process.env.MONGODB_URI || 4000}`);
});
