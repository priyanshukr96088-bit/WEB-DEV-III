const tourModel = require("../model/tourmModel");

//get all tours
const getAllTours = (req, res) => {
    const tours = tourModel.getAll();
    res.json(tours);
};
module.exports = {
    getAllTours
};




// app.get("/", (req, res) => {
//   res.status(200).send("Hello, Babu!");
// });

// app.get("/packages", (req, res) => {
//   const destination = req.query.destination;
//   if (!destination) {
//     res.status(200).json(packages);
//   }
//   const filteredPackages = packages.filter((pkg) => pkg.destination.toLocaleLowerCase() === destination.toLocaleLowerCase());
//   res.status(200).json(filteredPackages);
// });

// app.get("/packages/:id", (req, res) => {
//   const packageId = parseInt(req.params.id);
//   const tourPackage = packages.find((pkg) => pkg.id === packageId);
//   res.status(200).json(tourPackage);
// });

// app.post('/packages', (req, res) => {
//   const newPackage = req.body;
//   packages.push(newPackage);
//   res.status(201).json(newPackage);
// });

