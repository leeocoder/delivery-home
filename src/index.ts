import express, { NextFunction, Request, Response } from "express";
const app = express();
import "express-async-errors";
import { routes } from "./routes";

app.use(express.json());
app.use("/api", routes);
app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof Error)
      return response.status(400).json({ error: error.message });
    return response.status(500).json({
      error: "Internal server error!",
    });
  }
);
app.listen(3000, () => console.log("Server is running"));
