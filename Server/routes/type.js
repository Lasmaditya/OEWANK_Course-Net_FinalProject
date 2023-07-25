const typeRoute = require("express").Router();
const TypeController = require("../controllers/TypeController");

typeRoute.get("/", TypeController.getTypes);
typeRoute.post("/create", TypeController.create);

module.exports = typeRoute;