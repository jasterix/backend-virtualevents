const eventSeed = require("./seeds/eventSeed");
// // serve static assets when in production
// if (process.env.NODE_ENV === 'production') {
//   // Set static folder
//   app.use(express.static('client/build'));
//   app.get('*', (request, response) => {
//     response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//   });
// } else {
// }

const http = require("http");
const app = require("./app");

const port = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
