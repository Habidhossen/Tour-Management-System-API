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
    const tours = await Tour.find();
    res.status(200).json({
      status: "success",
      data: tours,
    });
  } catch (error) {
    res.status(500).json({
      status: fail,
      message: "Can't get the data",
      error: error.message,
    });
  }
};

exports.getSpecificTour = async (req, res) => {
  try {
    const tourId = req.params.id;
    /* fon finding data you can use findOne() or findById() method */
    const tour = await Tour.findById(tourId);

    /* increase views for this tour */
    const incViewCount = await Tour.updateOne(
      { _id: tourId },
      { $inc: { views: 1 } }
    );

    res.status(200).json({
      status: "success",
      data: tour,
    });
  } catch (error) {
    res.status(500).json({
      status: fail,
      message: "Can't get the data",
      error: error.message,
    });
  }
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
    const cheapestTour = await Tour.find().sort("price").limit(3);
    res.status(200).json({
      status: "success",
      data: cheapestTour,
    });
  } catch (error) {
    res.status(500).json({
      status: fail,
      message: "Can't get the data",
      error: error.message,
    });
  }
};

exports.featuredTour = async (req, res) => {
  try {
  } catch (error) {}
};
