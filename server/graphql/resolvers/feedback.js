//resolvers contains query, mutation definitions (server-side logic)
const Feedback = require("../../models/feedback");

module.exports = {
  feedbacks: () => {
    return Feedback.find()
      .then(feedbacks => {
        return feedbacks.map(feedback => {
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
};
