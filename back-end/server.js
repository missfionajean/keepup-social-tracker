// --- DEPENDENCIES & VARIABLES --- //

// sets up .env intereaction
const dotenv = require("dotenv");
dotenv.config();

// imports express and sets it to varable "app"
const express = require("express");
const app = express();

// imports other dependencies
const mongoose = require("mongoose");
const methodOverride = require("method-override");
const morgan = require("morgan");

// express session for cookie handling
const session = require("express-session");

// sets port from env file if there is one, otherwise defaults to 3000
const port = process.env.PORT ? process.env.PORT : 3000;

// imports routers from controller files
const authController = require("./controllers/auth.js");
const contactController = require("./controllers/contact.js");

// --- DB CONNECTION --- //

// establishes connection to database from .env file
mongoose.connect(process.env.MONGODB_URI);

// prints DB connection success message to console
mongoose.connection.on("connected", () => {
	console.log(`Connected to MongoDB: ${mongoose.connection.name}`);
});

// --- MIDDLEWARE --- //

// middleware to parse url-encoded data from forms
app.use(express.urlencoded({ extended: false }));

// middleware for using additional HTTP methods
app.use(methodOverride("_method"));

// middleware for logging HTTP requests to console
app.use(morgan("dev"));

// middleware for session handling
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
	})
);

// creates server listener
app.listen(port, () => {
	console.log(`Server is listening on port: ${port}`);
});

// --- HTTP ROUTES --- //

// funnels "/auth" routes to authController
app.use("/auth", authController);

// funnels "/contacts" routes to contactController
app.use("/contacts", contactController);
