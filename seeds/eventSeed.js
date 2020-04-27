const faker = require('faker');
const mongoose = require('mongoose');
const Event = require('../api/models/event.js');

// const eventSeed = async () => {
//   try {
//     const quantity = 10;
//     const events = [];
//     for (let s = 0; s < quantity; s++) {
//       events.push(
//         new Event({
//           _id: new mongoose.Types.ObjectId(),
//           title: faker.company.companyName(),
//           website: faker.internet.url(),
//           eventDate: faker.date.future(),
//           addressNumber: faker.random.number(),
//           addressStreet: faker.address.streetName(),
//           addressCity: faker.address.city(),
//           addressState: faker.address.state(),
//           addressZipcode: faker.address.zipCode(),
//         })
//       );
//     }
//     events.forEach((event) => {
//       Event.create(event);
//       console.log(event);
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

const excelSeed = () => {
  let event = Event.create({
    _id: new mongoose.Types.ObjectId(),
    title: 'Red Hat Summit',
    startDate: '43949',
    endDate: '43950',
    description:
      'Each year, Red Hat Summit is one of our favorite events of the year because it brings together our customers, partners, community members and Red Hatters to talk about the open source innovations and best practices that are enabling the future of enterprise technology.',
    eventLink:
      'https://www.redhat.com/en/blog/moving-red-hat-summit-2020-virtual-experience',
    eventType: 'conference',
    free: true,
  });
};

excelSeed();

// Uncomment to seed database
// eventSeed();
