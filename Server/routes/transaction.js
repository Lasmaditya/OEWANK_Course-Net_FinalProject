const transactionRoute = require("express").Router();
const TransactionController = require("../controllers/TransactionController");

transactionRoute.post("/create", TransactionController.create);

module.exports = transactionRoute;