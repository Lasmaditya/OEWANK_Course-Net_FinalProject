import { Router } from "express";
const savingRoute = Router();
import { SavingController } from "../controllers";

savingRoute.post("/create",SavingController.create);
savingRoute.put("/update/:id", SavingController.update);

export default savingRoute;