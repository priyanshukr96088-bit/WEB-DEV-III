const express = require("express");
const app = express();
app.use(express.json());

const tourRoutes = require("./route/tourRoutes");
const userRoutes = require("./route/userRoutes");

app.use("/api", tourRoutes);
app.use("/api", userRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});  