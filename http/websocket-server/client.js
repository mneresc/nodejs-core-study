const fs = require('fs');
const http = require('http');

const index = fs.readFileSync('public/index.html');

const server = http.createServer((request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.end(index);
});

server.listen(8080);