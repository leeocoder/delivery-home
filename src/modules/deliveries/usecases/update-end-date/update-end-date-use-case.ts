import { prisma } from "../../../../database/prisma-client";
import { UpdateEndDate } from "../../../../protocols/update-end-date";

export class UpdateEndDateUseCase {
  async execute({ id_delivery: id, id_deliveryman }: UpdateEndDate) {
    const result = await prisma.deliveries.updateMany({
      where: {
        id,
        id_deliveryman,
      },
      data: {
        end_at: new Date(),
      },
    });
    return result;
  }
}
