const express = require('express');
const mongoose = require('mongoose');
const app = express();


// // Database
// mongoose
//   .connect(
//     `mongodb+srv://jasterix:123@cluster0-7uavs.mongodb.net/test?retryWrites=true&w=majority`,
//     {
//       useNewUrlParser: true,
//     }
//   )
//   .then(() => console.log('Connected to database...'))
//   .catch((err) => console.error(err));

// // Middleware
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// // Controllers
// const EventController = require('./controllers/EventController');

// // Routes
// app.post('/', EventController.create);
// app.post('/api/event/update', EventController.update);
// app.get('/api/event/retrieve', EventController.retrieve);
// app.delete('/api/event/delete', EventController.delete);

// // Start Server
// app.listen(3000, () => console.log('Server has started...'));
