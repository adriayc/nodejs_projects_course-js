const http = require('http');

const server = http.createServer((req, res) => {
  // console.log(req.method);

  const url = req.url;
  // Home page
  if (url === '/') {
    // Headers
    res.writeHead(200, { 'content-type': 'text/html' }); // 200 OK

    res.write('<h1>Home page</h1>');
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

server.listen(5000);
