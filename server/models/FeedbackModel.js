import mongoose from "mongoose";

const feedbackSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    validate: /^[A-Za-z ]*$/
  },
  email: {
    type: String,
    required: true,
    match: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  message: {
    type: String,
    required: true,
    maxlength: 1000,
    trim: true
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  submittedAt: {
    type: Date,
    default: Date.now
  }
});

const Feedback = mongoose.model("FeedbackModel", feedbackSchema);

export default Feedback;
