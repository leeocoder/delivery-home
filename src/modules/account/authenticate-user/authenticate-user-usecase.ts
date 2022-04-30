import { prisma } from "../../../database/prisma-client";
import { UnauthorizedError } from "../../../errors";
import { UserParam } from "./../../../protocols/UserParam";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export class AuthenticateUserUseCase {
  async execute({ username, password }: UserParam) {
    const client = await prisma.clients.findFirst({
      where: {
        username,
      },
    });
    if (!client) throw new UnauthorizedError();

    const passwordMatch = await compare(password, client.password);
    if (!passwordMatch) throw new UnauthorizedError();

    const token = sign({ username }, process.env.JWT_SECRET || "any_secret", {
      subject: client.id,
      expiresIn: "1d",
    });
    return token;
  }
}
