require( "dotenv" ).config();
const express = require( "express" );
const app = express();
const morgan = require( "morgan" );
const bodyParser = require( "body-parser" );
const mongoose = require( "mongoose" );
const expressLayouts = require( "express-ejs-layouts" );
const expressValidator = require( "express-validator" );

// IMPORT ROUTES
const eventRoutes = require( "./api/routes/events.routes.js" );

// if (process.env.NODE_ENV === "production") {
//   mongoose
//     .connect(process.env.PRODUCTION_DATABASE_URL, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     })
//     .catch((err) => console.log(`Database Error: ${err}`));
//   // TELL EXPRESS WHERE TO LOOK FOR STATIC ASSETS
//   app.use(express.static(__dirname + "/public"));
//   app.get("/", (request, response) => {
//     response.render("pages/home");
//   });
// }

// CONNECT TO MONGODB DATABASE
mongoose
  .connect( process.env.DEVELOPMENT_DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } )
  .catch( ( err ) => console.log( `Database Error: ${err}` ) );

//since mongoose promise is depreciated, we override it with node's promise
// mongoose.Promise = global.Promise;

app.use( ( req, res, next ) => {
  res.header( "Access-Control-Allow-Origin", "*" );
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
} );

// LOG WHEN CONNECTION IS SUCCESSFUL
const db = mongoose.connection;
db.once( "open", () => console.log( "Connected to database successfully" ) );

app.use( morgan( "dev" ) );

// SET UP MIDDLEWARE
app.use( bodyParser.json() );
app.use(
  bodyParser.urlencoded( {
    extended: true,
    useUnifiedTopology: true,
  } )
);

// Set EJS AS TEMPLATING ENGINE
app.set( "view engine", "ejs" );
app.use( expressLayouts );

// TELL EXPRESS WHERE TO LOOK FOR STATIC ASSETS
app.use( express.static( __dirname + "/public" ) );

// Routes which should handle requests
app.use( "/events", eventRoutes );
app.get( "/", ( request, response ) => {
  response.render( "pages/home" );
} );

app.use( ( request, response, next ) => {
  const error = new Error( "Not found" );
  error.status = 404;
  next( error );
} );

app.use( ( error, request, response, next ) => {
  return response.status( error.status || 500 );
  next();
} );

module.exports = app;
