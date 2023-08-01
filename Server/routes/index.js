import { Router } from "express";
const route = Router();

const localHost = `server`;

route.get(`/${localHost}`, (req, res) => {
    res.status(200).json({
        message: "Home Page",
    });
});

import budgetRoute from "./budget";
import savingRoute from "./saving";
import transactionRoute from "./transaction";
import userRoute from "./user";

route.use(`/${localHost}/budget`, budgetRoute);
route.use(`/${localHost}/saving`, savingRoute);
route.use(`/${localHost}/transaction`, transactionRoute);
route.use(`/${localHost}/user`, userRoute);

export default route;