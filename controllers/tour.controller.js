const Tour = require("../models/tour.model");

exports.createTour = async (req, res) => {
  try {
    const tourData = req.body;
    const tour = new Tour(tourData);
    await tour.save();
    res.status(201).json({
      status: "success",
      message: "Data inserted successfully",
      data: tour,
    });
  } catch (error) {
    res.status(500).json({
      status: fail,
      message: "Data not inserted",
      error: error.message,
    });
  }
};

exports.getAllTours = async (req, res) => {
  try {
  } catch (error) {}
};
exports.getSpecificTour = async (req, res) => {
  try {
  } catch (error) {}
};
exports.updateTour = async (req, res) => {
  try {
  } catch (error) {}
};
exports.trendingTour = async (req, res) => {
  try {
  } catch (error) {}
};
exports.cheapestTour = async (req, res) => {
  try {
  } catch (error) {}
};
exports.featuredTour = async (req, res) => {
  try {
  } catch (error) {}
};
