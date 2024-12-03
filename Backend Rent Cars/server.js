const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors'); // Import the CORS middleware
dotenv.config();

const authRoutes = require('./routes/auth');
const carRoutes = require('./routes/cars')

const app = express();
const PORT = process.env.PORT || 5000;

// Use CORS middleware
// app.use(cors({
//   origin: 'http://localhost:3000',  // Specify the frontend's origin
//   methods: ['GET', 'POST'],  // Allow specific HTTP methods
//   credentials: true,  // Allow cookies to be sent in requests
// }));

app.use(cors())

// Middleware
app.use(express.json()); // To parse JSON request body

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('Failed to connect to MongoDB', err));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/car', carRoutes);


// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

