"use strict";

require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const fs = require("fs");
const path = require("path");
const app = express();
app.use(express.json());
app.use(cors());

const usersRouter = require("./routes/users-routes");
const expensesRoutes = require("./routes/expenses-routes");

const port = process.env.SERVER_PORT || 3060;

const accessLogStream = fs.createWriteStream(
  path.join(__dirname, "./access.log"),
  { flags: "a" }
);

app.use(morgan("combined", { stream: accessLogStream }));
app.use("/api/v1/users/", usersRouter);
app.use("/api/v1/expenses/", expensesRoutes);

app.listen(port, () => console.log(`Listening ${port}...`));
