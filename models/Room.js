import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      requerid: true
    },
    price: {
      type: Number,
      requerid: true
    },
    maxPeople: {
        type: Number,
        requerid: true
      },
    description: {
      type: String,
      requerid: true
    },
    roomNumbers:[{number: Number, unavailableDates: {type:[Date] }}]
  },
  { timestamps: true }
);

export default mongoose.model("Room", RoomSchema);
