const Event = require('../models/event');
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Event = require('../models/event');

///////////////////////// CREATE one event
router.post('/new', (request, response, next) => {
  const event = new Event({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
  });

  event
    .save()
    .then((result) => {
      response.status(201).json({
        message: 'Created a new Event sucessfully',
      });
      console.log(result);
    })
    .catch((error) => console.log(error));
  response.status(500).json({
    error: error,
  });
});

//////////////////////////GET all events
router.get('/', (request, response, next) => {
  Event.find()
    .exec()
    .then((docs) => {
      console.log(docs);
      response.status(200).json(docs);
    })
    .catch((error) => {
      console.log(error);
      response.status(500).json({
        error: error,
      });
    });
});

////////////////////////////// GET one event by ID
router.get('/:eventId', (request, response, next) => {
  const id = request.params.eventId;
  Event.findById(id)
    .exec()
    .then((doc) => {
      console.log('From database', doc);
      if (doc) {
        response.status(200).json(doc);
      } else {
        response
          .status(404)
          .json({ message: 'No valid entry found for provided ID' });
      }
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: err });
    });
});

/////////////////// PATCH one event
router.patch('/:eventId', (request, res, next) => {
  const id = request.params.eventId;
  const updateOperations = {};
  for (const operations of request.body) {
    updateOperations[operations.propName] = operations.value;
  }
  Event.update({ _id: id }, { $set: updateOperations })
    .exec()
    .then((result) => {
      console.log(result);
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
});

/////////////////// DELETE one event
router.delete('/:eventId', (request, response, next) => {
  const id = request.params.eventId;
  Event.remove({ _id: id })
    .exec()
    .then((result) => {
      response.status(200).json(result);
    })
    .catch((error) => {
      console.log(error);
      response.status(500).json({
        error: error,
      });
    });
});
module.exports = router;

// module.exports = {
//   create: (req, res) => {
//     let event = new Event({
//       title: req.body.title,
//     });

//     event
//       .save()
//       .then((result) => {
//         res.json({ success: true, result: result });
//       })
//       .catch((err) => {
//         res.json({ success: false, result: err });
//       });
//   },
//   update: (req, res) => {
//     Event.update({ _id: req.body._id }, req.body)
//       .then((event) => {
//         if (!event)
//           res.json({ success: false, result: 'Event does not exist' });

//         res.json(event);
//       })
//       .catch((err) => {
//         res.json({ success: false, result: err });
//       });
//   },
//   retrieve: (req, res) => {
//     Event.find()
//       .then((result) => {
//         if (!result) res.json({ success: false, result: 'No results found' });

//         res.json({ success: true, result: result });
//       })
//       .catch((err) => res.json({ success: false, result: err }));
//   },
//   delete: (req, res) => {
//     Event.remove({ _id: req.body._id })
//       .then((result) => {
//         if (!result)
//           res.json({
//             success: false,
//             result: 'No event was found with the ID',
//           });
//         res.json({ success: true, result: result });
//       })
//       .catch((err) => res.json({ success: false, result: err }));
//   },
// };
