const eventSeed = require("./seeds/eventSeed");
// const seed = require("./seeds/maySeed");

const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
