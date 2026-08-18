// const fs = require('fs');
// const data = fs.readFileSync('notes.txt', 'utf-8');
// console.log(data);
// fs.writeFileSync('notes.txt', 'This is Priyanshu babu');

// const path = require('path');
// const filepath = path.join(__dirname,'test', 'hello.txt');
// console.log(filepath);

// const os = require('os');
// const user = os.userInfo();
// console.log(user);

// const des = require('./data/des');
// console.log(des);

// const package = require('./data/package');
// console.log(package);   

// const process = require('process');
// console.log(process.argv[3]);// array me vejne ke liye process.argv ka use karte hai

// require('dotenv').config();
// const process = require('process');
// console.log(process.env.PORT);

const students = [
    {id: 1, name: 'priyanshu', age:'19'},
    {id: 2, name: 'hari', age:'20'},
    {id: 3, name: 'kaka', age:'121'},


]
const http = require('http');
require('dotenv').config();
const process = require('process');
const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    if(req.method === 'GET' && req.url === '/api/students'){
    res.writeHead(200, { 'Content-type': 'text/json' });
    res.end(
        JSON.stringify({count: students.length, students})
    );
    }   
    else if(req.method === 'GET' && req.url === '/api/students/count'){
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({count: students.length}));
    }
    else{
        res.writeHead(404, {'Content-Type': 'application/json'});
        res.end(JSON.stringify({error: 'Not found'}));
    }


    

    // res.write('<h1>Hello world</h1>');
    // res.write('<p>THis is my first server</p>');
    // res.write('<p>My name is Priyanshu</>');

});
server.listen(port, () => {
    console.log(`server is running on port ${port}`);
});