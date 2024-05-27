// app.js

const http = require('http');

http.createServer((request, response) =>{
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World');
    }).listen(3000);

console.log('Server running at http://127.0.0.1:3000/')









// const c = require("ansi-colors")

// function hello(name){
//     console.log(c.green(name)+"님, 안녕하세요");
// }


// console.log("라면");