const mongoose = require('mongoose');
require("dotenv").config({ path: "backend/config/.env" });
mongoose.set('strictQuery', false);
// mongoose.set('strictQuery', true);

// Retrieve the MongoDB Atlas connection string from the environment variables
const mongoURI = process.env.MONGODB_URI;

async function connectDB() {
    try {
        // console.log('MongoDB URI:', process.env.MONGODB_URI);
    //   const mongoURI = process.env.MONGODB_URI;
      await mongoose.connect(mongoURI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      console.log('Connected to MongoDB Atlas');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      // Handle error or throw it further
      throw new Error('Failed to connect to MongoDB');
    }
  }


module.exports = connectDB