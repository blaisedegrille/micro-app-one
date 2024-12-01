const express = require("express");
const http = require("http");
const path = require("path");

const app = express();

const port = process.env.PORT || 4210;

const root = path.join(__dirname, "../", "dist/micro-app-one");
app.use(express.static(root));
console.log("root: ", root);
app.get("/*", (req, res) => res.sendFile(path.join(__dirname)));

const server = http.createServer(app);

server.listen(port, () =>
  console.log(`App running on: http://localhost:${port}`)
);
