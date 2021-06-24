import { getCustomRepository } from "typeorm";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

import { UsersRepository } from "../repositories/UsersRepository";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const usersRepository = getCustomRepository(UsersRepository);

    //Verify if e-mail exists
    const user = await usersRepository.findOne({ email });

    if (!user) {
      throw new Error("E-mail/Password incorrect!");
    }

    //Verify if password matches
    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new Error("E-mail/Password incorrect!");
    }

    //If e-mail exists and password matches, generate token
    const token = sign({
      email: user.email
    }, "bcb4988d04cf0e061340fb939ad6b8e4", {
      subject: user.id,
      expiresIn: "1d"
    });

    return token;
  }
}

export { AuthenticateUserService };