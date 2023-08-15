const http = require('http');
const port = 3000;

const routes = {
  '/': 'Main page',
  '/books': 'Books page',
  '/authors': 'Authors page',
  '/publishers': 'Publishers page' 
}

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain' });
  res.end(routes[req.url]);
})

server.listen(port, () => {
  console.log(`Server listening http://localhost:${port} :)` )
})

