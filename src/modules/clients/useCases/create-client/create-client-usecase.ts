import { prisma } from "../../../../database/prisma-client";
import { UsernameAlreadyInUse } from "../../../../errors/username-already-in-use";
import { hash } from "bcrypt";
type CreateClientParams = {
  username: string;
  password: string;
};
export class CreateClienteUseCase {
  async execute({ username, password }: CreateClientParams) {
    const clientExists = await prisma.clients.findFirst({
      where: { username: { mode: "insensitive" } },
    });
    if (clientExists) throw new UsernameAlreadyInUse();
    const hashPassword = await hash(password, 10);
    const client = await prisma.clients.create({
      data: {
        username,
        password: hashPassword,
      },
    });
    return client;
  }
}
