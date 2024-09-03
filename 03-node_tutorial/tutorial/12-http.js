const http = require('http');

const server = http.createServer((req, res) => {
  //   console.log(req);
  //   res.write('Welcome to out home page');
  //   res.end();

  if (req.url === '/') {
    res.end('Welcome to our home page');
    return;
  }
  if (req.url === '/about') {
    res.end('Here is our short history');
    return;
  }
  res.end(`
    <h1>Opps!</h1> 
    <p>We can't seem to find the page you are looking for</p>
    <a href="/">Back home
  `);
  //  Setup return
  // if / else if / else
});

// Open in browser: http://localhost:5000/
server.listen(5000);
