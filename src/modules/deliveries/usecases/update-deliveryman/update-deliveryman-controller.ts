import { UpdateDeliverymanUseCase } from "./update-deliveryman-usecase";
import { Request, Response } from "express";
import { UpdateDeliverymanParam } from "../../../../protocols/update-deliveryman-param";

export class UpdateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { idDeliveryman } = request;
    const { id: idDelivery } = request.params;
    const updateDeliverymanUseCase = new UpdateDeliverymanUseCase();
    const delivery = await updateDeliverymanUseCase.execute({
      idDelivery,
      idDeliveryman,
    });
    return response.json(delivery);
  }
}
