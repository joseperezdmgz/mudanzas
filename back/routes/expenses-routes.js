"use strict";

const express = require("express");
const addExpenses = require("../controllers/expenses/add-expenses");

const router = express.Router();

//api/v1/expenses
router.route("/").post((req, res) => addExpenses(req, res));

module.exports = router;
