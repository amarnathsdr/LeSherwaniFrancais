const Feedback = require("../../models/feedback");

module.exports = {
  Query: {
    async feedbacks() {
      return await Feedback.find();
    }
  },
  Mutation: {
    async createFeedback(root, args) {
      return await Feedback.create(args);
    }
  }
};
