import "reflect-metadata";
import express, { Request, Response, NextFunction } from "express";
import "express-async-errors";

import { router } from "./routes";

import "./database";

//SET THE PORT HERE
const port = 3333;
const app = express();

app.use(express.json());

app.use(router);

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) {
    return res.status(400).json({
      error: err.message
    });
  };

  return res.status(500).json({
    status: "error",
    message: "Internal server error."
  });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));