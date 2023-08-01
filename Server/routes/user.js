import { Router } from "express";
const userRoute = Router();
import { UserController } from "../controllers";
import authentication from "../middlewares/authentication";

userRoute.post("/register", authentication, UserController.register);
userRoute.post("/login", UserController.login);
userRoute.get("/", UserController.getAllUsers);
userRoute.get("/account/:id", UserController.findById);
userRoute.delete("/delete/:id", UserController.delete);
userRoute.put("/update/:id", UserController.update);

export default userRoute;