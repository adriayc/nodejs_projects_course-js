const http = require('http');

// Create server
const server = http.createServer((req, res) => {
  console.log('User hit the server');
  res.end('Home page');
});

// Listening port
server.listen(5000);

// TEST: Browser | Thunder Client
// GET: http://localhost:5000
