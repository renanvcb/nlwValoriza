import { getCustomRepository } from "typeorm";
import { UsersRepository } from "../repositories/UsersRepository";
import { classToPlain } from "class-transformer";


class ListAllUsersService {
  async execute() {
    const usersRepository = getCustomRepository(UsersRepository);

    const users = await usersRepository.find();

    // Uses the Exclude function set on User entity to hide password info
    return classToPlain(users);
  }
}

export { ListAllUsersService };