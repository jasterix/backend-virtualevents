const faker = require('faker');
const mongoose = require('mongoose');
const Event = require('../api/models/event.js');

const eventSeed = async () => {
  try {
    const quantity = 10;
    const events = [];
    for (let s = 0; s < quantity; s++) {
      events.push(
        new Event({
          _id: new mongoose.Types.ObjectId(),
          title: faker.company.companyName(),
          website: faker.internet.url(),
          eventDate: faker.date.future(),
          addressNumber: faker.random.number(),
          addressStreet: faker.address.streetName(),
          addressCity: faker.address.city(),
          addressState: faker.address.state(),
          addressZipcode: faker.address.zipCode(),
        })
      );
    }
    events.forEach((event) => {
      Event.create(event);
      console.log(event);
    });
  } catch (error) {
    console.log(error);
  }
};

eventSeed();
