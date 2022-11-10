const mongoose = require("mongoose");

const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: [true, "The {VALUE} already taken"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description for this tour!"],
      trim: true,
      maxLength: [50, "Description length must be {VALUE} characters"],
    },
    image: {
      type: String,
    },
    price: {
      type: Number,
      required: [true, "Please provide cost for this tour!"],
      min: [0, "Price can't be negative"],
    },
    reviews: {
      type: Number,
      default: 0,
      required: true,
    },
    views: {
      type: Number,
      default: 0,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Tour", tourSchema);
