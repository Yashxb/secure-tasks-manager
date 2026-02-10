const express = require("express");
const router = express.Router();

const {
  createTask,
  getTasks,
  updateTask,
  deleteTask,
} = require("../controllers/taskController");

const { protect } = require("../middleware/authMiddleware");

// All routes are protected
router
  .route("/")
  .post(protect, createTask)   // Create task
  .get(protect, getTasks);     // Get all tasks of logged-in user

router
  .route("/:id")
  .put(protect, updateTask)    // Update task
  .delete(protect, deleteTask); // Delete task

module.exports = router;
