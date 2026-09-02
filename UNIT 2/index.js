const express = require("express");
const app = express();
app.use(express.json());

const tourRoutes = require("./route/tourRoutes");

app.use("/api", tourRoutes);



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

// app.put('/user/:id',(req,res) => {
//   console.log(req.params.id);
//   console.log(req.body);
//   res.send("user update successfully");
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});  