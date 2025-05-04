const http = require('node:http');

const PORT = process.env.PORT || 5000;

const httpServer = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<h1>Hello Server</h1>');
});

httpServer.listen(PORT, () => {
  console.log(`Server is listening http://localhost:${PORT}`);
});
