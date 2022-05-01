import { Request, Response } from "express";
import { UpdateEndDateUseCase } from "./update-end-date-use-case";

export class UpdateEndDateController {
  async handle(request: Request, response: Response) {
    const { idDeliveryman: id_deliveryman } = request;
    const { id: id_delivery } = request.params;
    const updateEndDateUseCase = new UpdateEndDateUseCase();
    const delivery = await updateEndDateUseCase.execute({
      id_delivery,
      id_deliveryman,
    });
    return response.json(delivery);
  }
}
