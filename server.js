const express = require("express");

const app = express();

const morgan = require("morgan");

// var bodyParser = require("body-parser");

const mongoose = require("mongoose");

const port = process.env.Port || 8080;

const dotenv = require("dotenv");

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Middlewares
app.use(morgan("dev"));
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

// require("./routes/api_routes")(app);

dotenv.config();
//mongo Local connection
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to DB!")
);

app.listen(port, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
