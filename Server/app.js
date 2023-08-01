import dotenv from "dotenv";
dotenv.config();
import express from "express";
const app = express();
const PORT = +process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

import routes from "./routes";
app.use(routes);

app.listen(PORT, (req, res) => {
    comsole.log(`App is listening on ${PORT}`);
});