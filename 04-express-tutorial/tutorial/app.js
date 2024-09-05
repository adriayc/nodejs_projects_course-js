const http = require('http');
const { readFileSync } = require('fs');

// Get all files
// const homePage = readFileSync('./index.html');
const homePage = readFileSync('./navbar-app/index.html');
const homeStyles = readFileSync('./navbar-app/styles.css');
const homeImage = readFileSync('./navbar-app/logo.svg');
const homeLogic = readFileSync('./navbar-app/browser-app.js');

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
  // styles
  else if (url === '/styles.css') {
    res.writeHead(200, { 'content-type': 'text/css' });

    res.write(homeStyles);
    res.end();
  }
  // image/logo
  else if (url === '/logo.svg') {
    res.writeHead(200, { 'content-type': 'image/svg+xml' });

    res.write(homeImage);
    res.end();
  }
  // logic
  else if (url === '/browser-app.js') {
    res.writeHead(200, { 'content-type': 'text/javascript' });

    res.write(homeLogic);
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
