const route = require("express").Router();

route.get("/", (req, res) => {
    res.send("Hello World!");
});

const userRoutes = require("./user");
const transactionRoutes = require("./transaction");
const historyRoutes = require("./history");

route.use("/user", userRoutes);
route.use("/transaction", transactionRoutes);
route.use("/history", historyRoutes);

module.exports = route;