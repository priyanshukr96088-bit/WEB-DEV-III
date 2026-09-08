const userModel = require("../models/userModel");

// get all users
const getAllusers = (req,res) => {
    const users = userModel.getAllusers();
    res.json(users);
};

const getById = (req,res) => {
    const id = parseInt(req.params.id);
    const user = userModel.getById(id);
    if(user){
        res.json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
};

const addUser = (req,res) => {
    const newUser = req.body;
    const addedUser = userModel.addUser(newUser);
    res.status(201).json(addedUser);
};

const updateUser = (req,res) => {
    const id = parseInt(req.params.id);
    const updatedUserData = req.body;
    const updatedUser = userModel.updateUser(id, updatedUserData);
    if(updatedUser) {
        res.json(updatedUser);
    } else {
        res.status(404).json({ message: "User not found" });
    }  
};

const searchUser = (req,res) => {
    const destination = req.query.destination;
    if(!destination) {
        return res.status(400).json({ message: "Destination query parameter is required" });
    }
    const users = userModel.searchUser(destination);
    res.json(users);
};

const searchUserbyPrice = (req,res) => {
    const minPrice = parseFloat(req.query.minprice);
    const maxprice = parseFloat(req.query.maxprice);
    if(isNaN(minPrice) || isNaN(maxprice)) {
        return res.status(400).json({ message: "Invalid price parameters"});  
    }
    const users = userModel.searchUserbyPrice(minPrice, maxprice);
    res.json(users);
}

const deleteUser = (req,res) => {
    const id = parseInt(req.params.id);
    const updatedUsers = userModel.deleteUserById(id);
    res.json(updatedUsers); 
}


module.exports = {
    getAllusers,
    getById,
    addUser,
    updateUser,
    deleteUser,
    searchUser,
    searchUserbyPrice
};