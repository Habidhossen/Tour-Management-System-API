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
router.patch("/tour/:id", updateTour);
router.get("/tour/trending", trendingTour);
router.get("/tour/cheapest", cheapestTour);
router.get("/tour/featured", featuredTour);

module.exports = router;
