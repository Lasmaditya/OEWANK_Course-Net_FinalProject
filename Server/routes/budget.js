import { Router } from "express";
const budgetRoute = Router();
import { BudgetController } from "../controllers";

budgetRoute.post("/create",BudgetController.create);
budgetRoute.put("/update/:id", BudgetController.update);

export default budgetRoute;