const mongoose = require('mongoose');
require('dotenv').config();  // Load environment variables

const DB_URL = process.env.MONGO_URL; // Get MongoDB URI

// Retry connection logic (you can customize the retry behavior)
const connection = async () => {
  try {
    const response = await mongoose.connect(DB_URL, {
      bufferCommands: false, // Disable buffering
      serverSelectionTimeoutMS: 30000, // Timeout after 30 seconds
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
    setTimeout(connection, 5000); // Retry after 5 seconds if the connection fails
  }
};

connection();
