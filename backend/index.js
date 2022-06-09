const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv/config");
const path = require("path");
app.use(cors());
app.use(bodyParser.json());

// Import Routes
const employees = require("./routes/employees");

// Routes
app.use("/employees", employees);

// DB connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("connected to DB")
);

app.listen(port, () => {
  console.log(`Employee Management server started at ${port}`);
});
