const express = require('express');
const app = express();
app.use(express.json());
const router = express.Router();
const userController = require("../controller/userController");


router.get("/users", userController.getAllusers);
router.get("/users/search", userController.searchUser);
router.get("/users/search/price", userController.searchUserbyPrice);    
router.get("/users/:id", userController.getById);
router.post("/users", userController.addUser);
router.delete("/users/:id", userController.deleteUser);
router.put("/users/:id", userController.updateUser);
router.delete("/users/:id", userController.deleteUser);

module.exports = router;