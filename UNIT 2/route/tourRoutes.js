const express = require("express");
const app = express();
app.use(express.json());
const router = express.Router();
const tourController = require("../controller/tourController");

//get all tours
router.get("/tours", tourController.getAllTours);
router.get("/tours/search", tourController.searchTour);
router.get("/tours/search/price", tourController.searchTourByPrice);    
router.get("/tours/:id", tourController.getTourById);
router.post("/tours", tourController.addTour);
router.delete("/tours/:id", tourController.deleteTour);
router.put("/tours/:id", tourController.updateTour);

module.exports = router;