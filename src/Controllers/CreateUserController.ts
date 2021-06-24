import { Request, Response } from "express";
import { CreateUserService } from "../services/CreateUsersService";

class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, admin } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ name, email, admin });

    return res.status(201).json(user);
  };
};

export { CreateUserController };