const express = require("express");
const path = require("path");
const app = express();
const morgan = require("morgan");
const mongoose = require("mongoose");
const port = process.env.Port || 8080;
const dotenv = require("dotenv");

dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
// Middlewares
app.use(morgan("dev"));
const routes = require("./routes/api_routes")(app);

//mongo Local connection
mongoose.connect(
  process.env.DB_CONNECT,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("connected to DB!")
);

app.listen(port, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${port}!`);
});
