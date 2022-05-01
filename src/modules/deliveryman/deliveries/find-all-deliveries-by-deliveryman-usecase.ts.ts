import { prisma } from "../../../database/prisma-client";

export class FindAllDeliveriesByDeliverymanUseCase {
  async execute(id: string) {
    const deliveries = prisma.deliveryman.findMany({
      where: {
        id,
      },
      select: {
        Deliveries: true,
        username: true,
        id: true,
      },
    });
    return deliveries;
  }
}
