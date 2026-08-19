const express = require("express");
const app = express();
app.use(express.json());
const router = express.Router();
const tourController = require("../controller/tourController");

//get all tours
router.get("/", tourController.getAllTours);