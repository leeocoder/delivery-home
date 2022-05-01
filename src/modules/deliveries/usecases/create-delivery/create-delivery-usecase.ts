import { prisma } from "../../../../database/prisma-client";
import { DeliveryParam } from "./../../../../protocols/delivery-param";
export class CreateDeliveryUseCase {
  async execute({ itemName, idClient }: DeliveryParam) {
    const delivery = await prisma.deliveries.create({
      data: {
        item_name: itemName,
        id_client: idClient,
      },
    });
    return delivery;
  }
}
