const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique:true
    },
    title: {
      type: String,
      require: true,
      unique: true,
      min: 3,
      max: 60,
    },
    desc: {
      type: String,
      require: true,
      min: 3,
    },
    rating: {
      type: Number,
      require: true,
      min: 0,
      max: 5,
    },
    long: {
      type: Number,
      require: true,
    },
    lat: {
      type: Number,
      require: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("pins", PinSchema);