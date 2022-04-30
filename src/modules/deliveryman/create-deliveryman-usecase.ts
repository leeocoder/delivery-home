import { UserParam } from "../../protocols/UserParam";
import { prisma } from "../../database/prisma-client";
import { UsernameAlreadyInUse } from "../../errors";
import { hash } from "bcrypt";

export class CreateDeliverymanUseCase {
  async execute({ username, password }: UserParam) {
    const deliverymanExists = await prisma.deliveryman.findFirst({
      where: { username: { mode: "insensitive" } },
    });
    console.log(deliverymanExists);
    if (deliverymanExists) throw new UsernameAlreadyInUse();
    const hashPassword = await hash(password, 10);
    const delivery = await prisma.deliveryman.create({
      data: {
        username,
        password: hashPassword,
      },
    });
    return delivery;
  }
}
