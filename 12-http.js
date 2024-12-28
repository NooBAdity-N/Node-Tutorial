const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to our home page");
    return;
  }

  if (req.url === "/about") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Welcome to our about page");
    return;
  }

  // For unknown routes
  res.writeHead(404, { "Content-Type": "text/html" });
  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you're looking for</p>
    <a href="/">Back to Home</a>
  `);
});

const PORT = process.env.PORT || 4000;
server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
