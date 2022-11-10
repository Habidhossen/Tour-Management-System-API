const express = require("express");
const {
  createTour,
  getAllTours,
  getSpecificTour,
  updateTour,
  trendingTour,
  cheapestTour,
  featuredTour,
} = require("../controllers/tour.controller");
const router = express.Router();

router.post("/tours", createTour);
router.get("/tours", getAllTours);
router.get("/tours/:id", getSpecificTour);
router.patch("/tours/:id", updateTour);
router.get("/tours/trending", trendingTour);
router.get("/tours/cheapest", cheapestTour);
router.get("/tours/featured", featuredTour);

module.exports = router;
