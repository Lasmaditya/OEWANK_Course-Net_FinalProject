const route = require("express").Router();

route.get("/", (req, res) => {
    res.send("Hello World!");
});

// const userRoutes = require("./user");
const transactionRoutes = require("./transaction");
// const historyRoutes = require("./history");
// const typeRoutes = require("./type");

// route.use("/users", userRoutes);
route.use("/transactions", transactionRoutes);
// route.use("/histories", historyRoutes);
// route.use("/types", typeRoutes);

module.exports = route;