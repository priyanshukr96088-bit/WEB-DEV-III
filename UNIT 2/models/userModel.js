const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "../data/user.json");

// get all
const getAll = () => {
    const data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}

// get by id
const getById = (id) => {
    const users = getAll();
    return users.find((user) => user.id === id);
}

// add new user
const addUser = (newUser) => {
    const users = getAll();
    users.push(newUser);
    fs.writeFileSync(filePath, JSON.stringify(users));
    return newUser;
}

const updateUser = (id, updatedData) => {
    const users = getAll();
    const Index = users.findIndex((user) => user.id === id);
    if (Index !== -1) {
        users[Index] = { ...users[Index], ...updateUser };
        fs.writeFileSync(filePath, JSON.stringify(users));
        return users[Index];
    }
    return null;
}

const searchUser = (destination) => {
    const users = getAll();
    return users.filter((user) => user.destination.toLowerCase() === destination.toLowerCase());
}

const searchUserByPrice = (minPrice, maxPrice) => {
    const users = getAll();
    return users.filter((user) => user.Index >= minPrice && user.price <= maxPrice);
}

const deleteUserById = (id) => {
    const users = getAll();
    const updatedUsers = users.filter((user) => user.id !== id);
    fs.writeFileSync(filePath, JSON.stringify(updatedUsers));
    return updatedUsers;    
}

module.exports = {
    getAll,
    getById,
    addUser,
    updateUser,
    deleteUserById,
    searchUser,
    searchUserByPrice
};
