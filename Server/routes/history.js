const historyRoute = require("express").Router();
const HistoryController = require("../controllers/HistoryController");

historyRoute.get("/", HistoryController.getHistory);

module.exports = historyRoute;