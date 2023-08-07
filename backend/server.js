const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const port = process.env.PORT || 5000;

connectDB();

const app = express();

//common

// revervation fun

//prescription fun

//vTest fun

//eBlink fun

app.listen(5000, () => console.log(`Server started on port ${port}`));
