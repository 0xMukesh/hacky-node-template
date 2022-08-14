import express, { Application, Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

import router from "@/routes/router";

dotenv.config();

const app: Application = express();
const prisma = new PrismaClient();

app.get("/", (_req: Request, res: Response) => {
  return res.status(200).json({
    message: "[🚅] The server is up and running",
  });
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api", router);

const port = process.env.PORT || 3000;

app.listen(port, async () => {
  await prisma.$connect();

  console.log("📦 Connected to MongoDB");
  console.log(
    `🏄‍♂️ The server is up and running at ${port} in ${process.env.NODE_ENV} mode`
  );
});
