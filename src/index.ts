import express from "express";
const app = express();
import { routes } from "./routes";

app.use(express.json());
app.use("/api", routes);
app.listen(3000, () => console.log("Server is running"));
