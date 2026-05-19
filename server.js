const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = 3000;

const mimeTypes = {
  ".html": "text/html",
  ".css": "text/css",
  ".js": "application/javascript",
  ".json": "application/json",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".svg": "image/svg+xml",
};

const server = http.createServer((req, res) => {
  const urlPath = req.url.split("?")[0];
  let filePath = "." + urlPath;

  if (filePath === "./") {
    filePath = "./index.html";
  }

  const extname = path.extname(filePath);
  const contentType = mimeTypes[extname] || "text/plain";

  fs.readFile(filePath, (err, content) => {
    if (err) {
      res.writeHead(404);
      res.end("404 Not Found");
      return;
    }

    res.writeHead(200, {
      "Content-Type": contentType,
    });

    res.end(content);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});