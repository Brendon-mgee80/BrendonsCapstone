import { Router } from "express";
import Feedback from "../models/feedback.js";

const router = Router();

// Create feedback route
router.post("/", async (request, response) => {
  try {
    // Create a new feedback entry using the request body
    const newFeedback = new Feedback(request.body);

    // Save the feedback entry to the database
    const data = await newFeedback.save();

    // Respond with the saved data
    response.json(data);
  } catch (error) {
    // Output error to the console in case it fails to send in response
    console.error(error);

    // Handle validation errors
    if (error.name === "ValidationError") {
      return response.status(400).json(error.errors);
    }

    // Handle other errors
    return response.status(500).json(error.errors);
  }
});

router.get("/", async (req, res) => {
  try {
    const feedbackList = await Feedback.find().sort({ submittedAt: -1 });
    res.json(feedbackList);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
