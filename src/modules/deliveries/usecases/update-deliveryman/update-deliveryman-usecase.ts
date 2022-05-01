import { prisma } from "../../../../database/prisma-client";
import { UpdateDeliverymanParam } from "../../../../protocols/update-deliveryman-param";

export class UpdateDeliverymanUseCase {
  async execute({ idDelivery, idDeliveryman }: UpdateDeliverymanParam) {
    const result = await prisma.deliveries.update({
      where: {
        id: idDelivery,
      },
      data: {
        id_deliveryman: idDeliveryman,
      },
    });
    return result;
  }
}
