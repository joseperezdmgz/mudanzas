"use strict";

const createJsonError = require("../../errors/create-json-errors");
const { createExpense } = require("../../repositories/expenses-repository");

async function registerUsers(req, res) {
  try {
    const { userId, ammount, date, category, work, comments } = req.body;

    const id = await createExpense(
      userId,
      ammount,
      date,
      category,
      work,
      comments
    );

    res.status(201).send("Gasto añadido");
  } catch (err) {
    createJsonError(err, res);
  }
}

module.exports = registerUsers;
