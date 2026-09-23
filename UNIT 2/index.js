const express = require("express");
const app = express();
// app.use(express.json());

// const tourRoutes = require("./route/tourRoutes");
// const userRoutes = require("./route/userRoutes");

// app.use("/api", tourRoutes);
// app.use("/api", userRoutes);

const checkAge = (req, res, next) => {
  const age = 7;
  if (age < 18) {
    return res.status(403).json({ message: "Access denied. You must be at least 18 years old." });
  }
  next();
}

const middleware1 = (req, res, next) => {
  console.log("Middleware 1 executed");
  next();
}

app.use(checkAge);
app.use(middleware1);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});  