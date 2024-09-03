const http = require('http');

const server = http.createServer((req, res) => {
  res.write('Welcome to out home page');
  res.end();
});

// Open in browser: http://localhost:5000/
server.listen(5000);
