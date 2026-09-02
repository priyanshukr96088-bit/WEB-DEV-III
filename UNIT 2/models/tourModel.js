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

const updateTour = (id, updatedData) => {
    const tours = getAll();
    const Index = tours.findIndex((tour) => tour.id === id);
    if (Index !== -1) {
        tours[Index] = { ...tours[Index], ...updatedData };// ...spread operator, means repopulate it or add something into existing data.
        fs.writeFileSync(filePath, JSON.stringify(tours));
        return tours[Index];
    }
    return null;
}

const searchTour = (destination) => {
    const tours = getAll();
    return tours.filter((tour) => tour.destination.toLowerCase() === destination.toLowerCase());

}

const searchTourByPrice = (minPrice, maxPrice) => {
    const tours = getAll();
    return tours.filter((tour) => tour.price >= minPrice && tour.price <= maxPrice);
}

//delete tour by id
const deleteTourById = (id) => {
    const tours = getAll();
    const updatedTours = tours.filter((tour) => tour.id !== id);
    fs.writeFileSync(filePath, JSON.stringify(updatedTours));
    return updatedTours;
}


module.exports = {
    getAll,
    getById,
    addTour,
    updateTour,
    deleteTourById,
    searchTour,
    searchTourByPrice
}; // export the module in the form of an object.       
