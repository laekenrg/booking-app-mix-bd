import mongoose from "mongoose";
const HotelSchema = new mongoose.Schema({
  name: {
    type: String,
    requerid: true,
  },
  type: {
    type: String,
    requerid: true,
  },
  city: {
    type: String,
    requerid: true,
  },
  address: {
    type: String,
    requerid: true,
  },
  distance: {
    type: String,
    requerid: true,
  },
  photos: {
    type: [String],
    requerid: true,
  },
  title: {
    type: String,
    requerid: true,
  },
  description: {
    type: String,
    requerid: true,
  },
  rating: {
    type: Number,
    min: 0,
    max: 5,
  },
  rooms: {
    type: [String],
  },
  cheapestPrice: {
    type: Number,
    requerid: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
});

export default mongoose.model("Hotel", HotelSchema);
