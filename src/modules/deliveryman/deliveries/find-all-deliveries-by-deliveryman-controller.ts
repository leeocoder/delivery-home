import { FindAllDeliveriesByDeliverymanUseCase } from "./find-all-deliveries-by-deliveryman-usecase.ts";
import { Request, Response } from "express";

export class FindAllDeliveriesByDeliverymanController {
  async handle(request: Request, response: Response) {
    const { idDeliveryman } = request;
    const findAllDeliveriesUseCase =
      new FindAllDeliveriesByDeliverymanUseCase();
    const deliveries = await findAllDeliveriesUseCase.execute(idDeliveryman);
    return response.json(deliveries);
  }
}
