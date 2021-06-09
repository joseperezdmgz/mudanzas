"use strict";

const Joi = require("joi");
const database = require("../infrastructure/database");

async function createExpense(userId, ammount, date, category, work, comments) {
  const pool = await database.getPool();
  const insertQuery =
    "INSERT INTO gastos (idUsuario, importe, fecha, categoria, obra, comentarios) VALUES (?,?,?,?,?,?)";
  const [created] = await pool.query(insertQuery, [
    userId,
    ammount,
    date,
    category,
    work,
    comments,
  ]);

  return created.insertId;
}

module.exports = {
  createExpense,
};
