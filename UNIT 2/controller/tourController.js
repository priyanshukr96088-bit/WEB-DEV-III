const tourModel = require("../models/tourModel");

//get all tours
const getAllTours = (req, res) => {
    const tours = tourModel.getAll();
    res.json(tours);
};
const getTourById = (req, res) => {
    const id = parseInt(req.params.id);//controller se id ayi
    const tour = tourModel.getById(id);//model ko pass kiya get by id function me
    if (tour) {
        res.json(tour);
    } else {
        res.status(404).json({ message: "Tour not found" });
    }
};

const addTour = (req, res) => {
    const newTour = req.body;
    const addedTour = tourModel.addTour(newTour);
    res.status(201).json(addedTour);
}

const updateTour = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTourData = req.body;
    const updatedTour = tourModel.updateTour(id, updatedTourData);
    if (updatedTour) {
        res.json(updatedTour);
    } else {
        res.status(404).json({ message: "Tour not found" });
    }
};

const searchTour = (req, res) => {
    const destination = req.query.destination;
    if (!destination) {
        return res.status(400).json({ message: "Destination query parameter is required" });
    
    }
    const tours = tourModel.searchTour(destination);
    res.json(tours);
};

const searchTourByPrice = (req, res) => {
    const minPrice = parseFloat(req.query.minPrice);
    const maxPrice = parseFloat(req.query.maxPrice);
    if (isNaN(minPrice) || isNaN(maxPrice)) {
        return res.status(400).json({ message: "Invalid price parameters" });
    }
    const tours = tourModel.searchTourByPrice(minPrice, maxPrice);
    res.json(tours);
};

const deleteTour = (req, res) => {
    const id = parseInt(req.params.id);
    const updatedTours = tourModel.deleteTourById(id);
    res.json(updatedTours);
}

module.exports = {
    getAllTours,
    getTourById,
    addTour,
    updateTour,
    deleteTour,
    searchTour,
    searchTourByPrice
};

