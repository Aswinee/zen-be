const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cors = require("cors");
const connect = require("./config/db");

const app = express();

require("dotenv").config({
  path: "./config/config.env",
});

connect();

app.use(cors());

app.use(
  express.json({
    extended: false,
  })
);

const authRoute = require("./routes/auth.route");

app.use("/api/", authRoute);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Listening to ${PORT}`);
});
