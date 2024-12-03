const express = require('express');
const router = express.Router();
const Car = require('../model/Cars'); // Ensure this path is correct

// Route to add a new car
router.post('/add', async (req, res) => {
  const { email, carname, fuel, transmission, rating, description, images, type, price } = req.body;

  try {
    // Create a new car document
    const newCar = new Car({
      email,
      carname,
      fuel,
      transmission,
      rating,
      description,
      images,
      type,
      price
    });

    // Save the car document to the database
    await newCar.save();

    res.status(201).json({ message: 'Car Order Successfully', car: newCar });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: err.message });
  }
});

// Route to delete a car by ID
router.delete('/delete/:id', async (req, res) => {
  const carId = req.params.id;

  try {
    // Find the car by ID and delete it
    const deletedCar = await Car.findByIdAndDelete(carId);

    if (!deletedCar) {
      return res.status(404).json({ message: 'Car not found' });
    }

    res.status(200).json({ message: 'Booking Cancelled', car: deletedCar });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

// Route to fetch cars by email
router.get('/fetch/email/:email', async (req, res) => {
  const userEmail = req.params.email;

  try {
    // Find cars by email
    const cars = await Car.find({ email: userEmail });

    if (!cars || cars.length === 0) {
      return res.status(404).json({ message: 'Please Book Some Cars To Deliver' });
    }

    res.status(200).json(cars);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
