import { Router } from "express";
const transactionRoute = Router();
import { TransactionController } from "../controllers";

transactionRoute.post("/create",TransactionController.create);
transactionRoute.get("/", TransactionController.getAllTransactions);
transactionRoute.delete("/delete/:id", TransactionController.delete);
transactionRoute.put("/update/:id", TransactionController.update);

export default transactionRoute;