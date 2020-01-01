const express = require("express");
const app = express();
const morgan = require("morgan");
// const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(morgan("dev"));
if (app.get("env") == "production") {
  app.use(
    morgan("common", {
      skip: function(req, res) {
        return res.statusCode < 400;
      },
      stream: __dirname + "/../morgan.log"
    })
  );
} else {
  app.use(morgan("dev"));
}

const routes = require("./routes/api_routes")(app);

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

// Middlewares

//mongo Local connection
// mongoose.connect(
//   process.env.DB_CONNECT,
//   { useNewUrlParser: true, useUnifiedTopology: true },
//   () => console.log("connected to DB!")
// );

app.listen(PORT, () => {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
