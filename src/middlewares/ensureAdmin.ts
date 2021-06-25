import { Request, Response, NextFunction } from "express";
import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";


export async function ensureAdmin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  // Recover user ID from request
  const { user_id } = req;

  const usersRepository = getCustomRepository(UsersRepository);

  // Finding the user and recovering the admin boolean data
  const { admin } = await usersRepository.findOne(user_id);

  //Verify if user is admin

  if (admin) {
    return next();
  }

  return res.status(401).json({
    error: "Unauthorized"
  });
}