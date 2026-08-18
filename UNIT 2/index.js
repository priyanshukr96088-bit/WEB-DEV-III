const express = require("express");
const app = express();

const packages = require("./data/tour.js");

// const user = [{
//   "name": "Babu",
//   "age": 25,
// },
// {
//   "name": "John",
//   "age": 30,  
// }]
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello, Babu!");
});

app.get("/packages", (req, res) => {
  const destination = req.query.destination;
  if (!destination) {
    res.json(packages);
  }
  const filteredPackages = packages.filter((pkg) => pkg.destination === destination);
  res.json(filteredPackages);
});

app.get("/packages/:id", (req, res) => {
  const packageId = parseInt(req.params.id);
  const tourPackage = packages.find((pkg) => pkg.id === packageId);
  res.send(tourPackage);
});

app.post('/packages', (req, res) => {
  const newPackage = req.body;
  packages.push(newPackage);
  res.status(201).json(newPackage);
});

// app.put('/user/:id',(req,res) => {
//   console.log(req.params.id);
//   console.log(req.body);
//   res.send("user update successfully");
// });

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});  