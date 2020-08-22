const faker = require( "faker" );
const mongoose = require( "mongoose" );
const Event = require( "../api/models/event.js" );

const eventType = [ "workshop", "career fair", "conference", "speaker series", "happy hour" ]

const event = {
  title: faker.lorem.words(),
  startDate: faker.date.future(),
  endDate: faker.date.future(),
  description: faker.lorem.paragraphs(),
  eventLink: faker.internet.url(),
  eventType: faker.random.arrayElement( eventType ),
  techWomen: faker.random.boolean(),
  blackTech: faker.random.boolean(),
  free: true
}

events = []

function fakeEvents( event ) {
  for ( let i = 0; i < 10; i++ ) {
    events.push( event )
  }

}

fakeEvents( event )

const seed = ( array ) => {
  function addDays( date, days ) {
    let result = new Date( date );

    result.setDate( result.getDate() + days );
    return result;
  }

  array.forEach( ( event ) => {

    Event.create( event )
      .then( ( eventRef ) => {

        let end = addDays( eventRef.startDate, 30 )

        Event.findByIdAndUpdate( eventRef._id,
          {
            $set: { endDate: end }
          },
          { new: true },
          function ( err, event ) {
            if ( err ) throw err;
            console.log( event );
          } )
      } )
  } )
}

// seed( events )
