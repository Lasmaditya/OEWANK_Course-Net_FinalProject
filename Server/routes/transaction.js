const transactionRoute = require("express").Router();
const TransactionController = require("../controllers/TransactionController");

transactionRoute.get("/createTopup", TransactionController.createTopup);
transactionRoute.get("/createExpenditure", TransactionController.createExpenditure);

module.exports = transactionRoute;