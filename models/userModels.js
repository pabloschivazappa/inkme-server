const mongoose = require('mongoose');
const { Schema } = mongoose;

// User schema
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profilePicture: { type: String },
    bio: { type: String },
    // bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
  });
  
//   // Tattoo artist (admin) schema
//   const tattooArtistSchema = new mongoose.Schema({
//     username: { type: String, required: true, unique: true },
//     email: { type: String, required: true, unique: true },
//     password: { type: String, required: true },
//     profilePicture: { type: String },
//     bio: { type: String },
//     services: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Service' }],
//     bookings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Booking' }],
//   });
  
//   // Service schema
//   const serviceSchema = new mongoose.Schema({
//     title: { type: String, required: true },
//     description: { type: String, required: true },
//     price: { type: Number, required: true },
//     artist: { type: mongoose.Schema.Types.ObjectId, ref: 'TattooArtist', required: true },
//   });
  
//   // Booking schema
//   const bookingSchema = new mongoose.Schema({
//     user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
//     artist: { type: mongoose.Schema.Types.ObjectId, ref: 'TattooArtist', required: true },
//     service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
//     date: { type: Date, required: true },
//     status: { type: String, enum: ['pending', 'confirmed', 'cancelled'], default: 'pending' },
//   });
  
  const User = mongoose.model('User', userSchema);
//   const TattooArtist = mongoose.model('TattooArtist', tattooArtistSchema);
//   const Service = mongoose.model('Service', serviceSchema);
//   const Booking = mongoose.model('Booking', bookingSchema);

  module.exports = User
