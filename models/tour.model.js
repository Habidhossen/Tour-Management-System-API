const mongoose = require("mongoose");

const tourSchema = mongoose.Schema({});

module.exports = mongoose.model("tour", tourSchema);
