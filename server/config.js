const mongoose = require("mongoose");

const uri = `mongodb+srv://${process.env.MONGO_USER}:${
  process.env.MONGO_PASSWORD
}@cluster0-rsdbl.mongodb.net/${
  process.env.MONGO_DB
}?authSource=admin&retryWrites=true&w=1&authMechanism=SCRAM-SHA-1`;

mongoose
  .connect(
    uri,
    { useNewUrlParser: true }
  )
  .then()
  .catch(err => {
    console.log(err);
  });

mongoose.connection.once("open", () => console.log(`Connected to mongo`));
