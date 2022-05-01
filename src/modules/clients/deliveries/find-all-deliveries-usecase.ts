import { prisma } from "../../../database/prisma-client";

export class FindAllDeliveriesUseCase {
  async execute(id: string) {
    const deliveries = prisma.clients.findMany({
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
