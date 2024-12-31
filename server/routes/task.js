const router = require("express").Router();
const authenticateToken = require("../models/auth/auth");
const Task = require("../models/task");
const User = require("../models/user");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

// Use body-parser middleware
app.use(bodyParser.json());  // For parsing application/json
app.use(bodyParser.urlencoded({ extended: true }));  // For parsing application/x-www-form-urlencoded

router.post("/create-task", authenticateToken, async (req, res) => {
  const { title, desc, important, complete } = req.body;  
  const { userId } = req.user;  // Get userId from the JWT token
   // Check if any valid data is provided in the body
   if (!title && !desc && important === undefined && complete === undefined) {
     return res.status(400).json({ message: "No data provided to update" });
   }
  // Validate that both title and description are provided
  if (!title || !desc) {
    return res.status(400).json({ message: "Title and description are required" });
  }

  try {
    // Create new task and associate it with the user
    const newTask = new Task({
      title: title,
      desc: desc,
      user: userId,  // Assign the userId to the task
      important: important !== undefined ? important : false,  // Default to false if not provided
      complete: complete !== undefined ? complete : false,  // Default to false if not provided
    });

    // Save the task to the database
    const savedTask = await newTask.save();

    // Optionally, add the task to the user's tasks array (if using a `tasks` array in `User`)
    await User.findByIdAndUpdate(userId, { $push: { tasks: savedTask._id } });

    // Return the saved task and success response
    res.status(200).json({
      message: "Task created and associated with user successfully",
      task: savedTask,
    });
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Server error" });
  }
});


router.get("/get-all-tasks", authenticateToken, async (req, res) => {
    try {
      const { id } = req.headers; // Get the authenticated user's ID from the token
  
    
      const userData = await User.findById(id).populate({
        path:"tasks",
        options:{sort:{createdAt:-1}}
      });
  
      // Respond with the user's tasks
      res.status(200).json({
        data:userData// Return the populated tasks array
      });
    } catch (err) {
      console.error("Error fetching tasks:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  

  router.delete("/delete-task/:id", authenticateToken, async (req, res) => {
    try {
        const { id } = req.params; 
      const { userId } = req.user; 
         await Task.findByIdAndDelete(id);
      // Then, remove the task reference from the user's tasks array in the User collection
       await User.findByIdAndUpdate(userId, { $pull: { tasks: id } });
 
      res.status(200).json({ message: "Task deleted successfully" });
    } catch (err) {
      console.error("Error deleting task:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });
 
  router.put("/update-task/:id", authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
      const { title, desc } = req.body;
  
      if (!title || !desc) {
        return res.status(400).json({ message: "Title and description are required" });
      }
  
      const updatedTask = await Task.findByIdAndUpdate(
        id,
        { title, desc },
        { new: true }
      );
  
      res.status(200).json({ message: "Task updated successfully", task: updatedTask });
    } catch (err) {
      console.error("Error updating task:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  router.put("/complete-task/:id", authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
  
      const updatedTask = await Task.findByIdAndUpdate(
        id,
        { complete: true },
        { new: true }
      );
  
      res.status(200).json({ message: "Task marked as complete", task: updatedTask });
    } catch (err) {
      console.error("Error completing task:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  
  router.put("/important-task/:id", authenticateToken, async (req, res) => {
    try {
      const { id } = req.params;
  
      const updatedTask = await Task.findByIdAndUpdate(
        id,
        { important: true },
        { new: true }
      );
  
      res.status(200).json({ message: "Task marked as important", task: updatedTask });
    } catch (err) {
      console.error("Error marking task as important:", err);
      res.status(500).json({ message: "Internal server error" });
    }
  });
module.exports = router;
