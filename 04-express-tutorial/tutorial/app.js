const http = require('http');
const { readFileSync } = require('fs');

// Get all files
const homePage = readFileSync('./index.html');

// Create server
const server = http.createServer((req, res) => {
  // Request
  // console.log(req);
  // console.log(req.method);
  // console.log(req.url);

  const url = req.url;
  // Home page
  if (url === '/') {
    // Headers
    res.writeHead(200, { 'content-type': 'text/html' }); // 200 OK
    // res.writeHead(200, { 'content-type': 'text/plain' }); // 200 OK
    // res.writeHead(404, { 'content-type': 'text/html' }); // 404 Not Found

    // res.write('<h1>Home page</h1>');
    res.write(homePage);
    res.end();
  }
  // About page
  else if (url === '/about') {
    res.writeHead(200, { 'content-type': 'text/html' });

    res.write('<h1>About page</h1>');
    res.end();
  }
  // 404 (Not found page)
  else {
    res.writeHead(404, { 'content-type': 'text/html' });

    res.write('<h1>Page not found</h1>');
    res.end();
  }
});

// Listening port
server.listen(5000);

// TEST: Browser | Thunder Client
// GET: http://localhost:5000
