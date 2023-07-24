const userRoute = require("express").Router();
const UserController = require("../controllers/UserController");

userRoute.post("/create", UserController.create);
userRoute.get("/:id", UserController.getUser);
userRoute.post("/update/:id", UserController.update);

module.exports = userRoute;