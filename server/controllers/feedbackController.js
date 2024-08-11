const Feedback = require('../models/Feedback');

const feedbackController = {
  async createFeedback(req, res) {
    try {
      const feedback = new Feedback(req.body);
      await feedback.save();
      res.status(201).send(feedback);
    } catch (error) {
      res.status(400).send(error);
    }
  },

  async getFeedbacks(req, res) {
    try {
      const feedbacks = await Feedback.find();
      res.status(200).send(feedbacks);
    } catch (error) {
      res.status(500).send(error);
    }
  }
};

module.exports = { feedbackController };
