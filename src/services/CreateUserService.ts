import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    const usersRepository = getCustomRepository(UsersRepository);

    // Verifying if e-mail is filled
    if (!email) {
      throw new Error("Email must not be empty");
    }

    // Verify if the e-mail is already in use
    const userAlreadyExists = await usersRepository.findOne({
      email
    });

    if (userAlreadyExists) {
      throw new Error("Email already in use");
    };

    // If e-mail is filled and not in use, create and save user
    const user = usersRepository.create({
      name,
      email,
      admin
    });

    await usersRepository.save(user);

    return user;
  }
}

export { CreateUserService };