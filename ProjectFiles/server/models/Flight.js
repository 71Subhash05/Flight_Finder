import mongoose from 'mongoose';

const flightSchema = new mongoose.Schema({
  flightId: String,
  flightName: String,
  origin: String,
  destination: String,
  departureTime: String,
  arrivalTime: String,
  basePrice: Number,
  totalSeats: Number,
});

const Flight = mongoose.model('Flight', flightSchema);

export default Flight;