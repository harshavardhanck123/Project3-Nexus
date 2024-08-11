const express = require('express');
const {feedbackController }= require('../controllers/feedbackController');

const router = express.Router();

router.post('/feedback', feedbackController.createFeedback);
router.get('/feedback', feedbackController.getFeedbacks);

module.exports = router;
