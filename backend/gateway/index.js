import bodyParser from "body-parser";
import cors from "cors";
import express from "express";
import { menuRoutes } from "../services/index.js";

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api/menus", menuRoutes);
app.use("/uploads", express.static("uploads"));

app.listen(port, () => {
  console.log(`Gateway running at ${port}`);
});
