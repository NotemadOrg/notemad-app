// api/app.js

const express = require("express");
const expressSession = require('express-session');
const passport = require('./middlewares/authentication');
// HTTP request logger middleware for Node.js
const morgan = require("morgan");
const path = require("path");
const { Sequelize } = require("./models");
const db = require("./models"); 
const app = express();
const PORT = process.env.PORT;

// this lets us parse 'application/json' content in http requests
app.use(express.json());

// setup passport and session cookies
// Must be between setup after express set up and before loading our controllers
app.use(expressSession({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// add http request logging to help us debug and audit app use
const logFormat = process.env.NODE_ENV === "production" ? "combined" : "dev";
app.use(morgan(logFormat));

// this mounts controllers/index.js at the route `/api`
app.use("/api", require("./controllers"));

// for production use, we serve the static react build folder
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));

  // all unknown routes should be handed to our react app
  app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../client/build", "index.html"));
  });
}

// update DB tables based on model updates. Does not handle renaming tables/columns
// NOTE: toggling this to true drops all tables (including data)
// alter: true checks what is the current table status
// Might consider using migration
db.sequelize.sync({ force: false}); 

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});

// start up the server
if (PORT) {
    app.listen(PORT, () => console.log(`Listening on ${PORT}`));
  } else {
    console.log("===== ERROR ====\nCREATE A .env FILE!\n===== /ERROR ====");
  }