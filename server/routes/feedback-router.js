const express = require("express");

const FeedbackCtrl = require("../controllers/feedback-ctrl");

const router = express.Router();

router.post("/feedback", FeedbackCtrl.createFeedback);
router.get("/feedbacks", FeedbackCtrl.getFeedbacks);
router.delete("/feedbacks", FeedbackCtrl.deleteFeedbacks);
module.exports = router;
