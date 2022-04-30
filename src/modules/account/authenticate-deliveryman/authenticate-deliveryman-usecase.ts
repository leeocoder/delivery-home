import { prisma } from "../../../database/prisma-client";
import { UnauthorizedError } from "../../../errors";
import { UserParam } from "../../../protocols/UserParam";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";

export class AuthenticateDeliverymanUseCase {
  async execute({ username, password }: UserParam) {
    const deliveryman = await prisma.deliveryman.findFirst({
      where: {
        username,
      },
    });
    if (!deliveryman) throw new UnauthorizedError();

    const passwordMatch = await compare(password, deliveryman.password);
    if (!passwordMatch) throw new UnauthorizedError();

    const token = sign({ username }, process.env.JWT_SECRET || "any_secret", {
      subject: deliveryman.id,
      expiresIn: "1d",
    });
    return token;
  }
}
