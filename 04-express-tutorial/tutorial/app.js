const http = require('http');

// Create server
const server = http.createServer((req, res) => {
  // console.log('User hit the server');
  // res.end('Home page');

  // Headers
  res.writeHead(200, { 'content-type': 'text/html' }); // 200 OK
  // res.writeHead(404, { 'content-type': 'text/html' }); // 404 Not Found
  // res.writeHead(200, { 'content-type': 'text/plain' });

  res.write('<h1>Home page</h1>');
  res.end();
});

// Listening port
server.listen(5000);

// TEST: Browser | Thunder Client
// GET: http://localhost:5000
