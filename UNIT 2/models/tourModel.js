const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/tour.json");

// get all
const getAll = () => {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}

// get by id
const getById = (id) => {
    const tours = getAll();
    return tours.find((tour) => tour.id === id);
}

// add new tour
const addTour = (newTour) => {
    const tours = getAll();
    tours.push(newTour);
    fs.writeFileSync(filePath, JSON.stringify(tours));
    return newTour; // Return the newly added tour
}

module.exports = {
    getAll,
    getById,
    addTour
}; // export the module in the form of an object.
