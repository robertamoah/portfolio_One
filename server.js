const express = require("express");
const path = require("path");
const app = express();
const dotenv = require("dotenv");
const morgan = require("morgan");
// const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;

dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan("dev"));

// Add routes, both API and vie
require("./routes/api_routes")(app);

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// mongo Local connection
// mongoose.connect(
//   process.env.DB_CONNECT,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => console.log("connected to DB!")
// );

app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
