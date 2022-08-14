import { PrismaClient } from '@prisma/client';
import { Request, Response } from 'express';

const deleteUser = async (req: Request, res: Response) => {
  const { email } = req.body;

  const prisma = new PrismaClient();

  try {
    await prisma.user.delete({
      where: {
        email,
      },
    });

    return res.status(200).json({
      message: `Successfully deleted an user with email ${email}`,
    });
  } catch (err) {
    return res.status(500).json({
      message: 'Internal server error',
      error: err,
    });
  }
};

export default deleteUser;
