import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const createUser = async (req: Request, res: Response) => {
  const { email, name } = req.body;

  const prisma = new PrismaClient();

  try {
    await prisma.user.create({
      data: {
        email,
        name,
      },
    });

    return res.status(200).json({
      message: `Created an user with name ${name}`,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
      error: err,
    });
  }
};

export default createUser;
