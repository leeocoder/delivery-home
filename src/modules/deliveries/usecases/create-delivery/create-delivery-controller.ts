import { Request, Response } from "express";
import { CreateDeliveryUseCase } from "./create-delivery-usecase";

export class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const { itemName } = request.body;
    const { idClient } = request;
    const createDeliveryUseCase = new CreateDeliveryUseCase();
    const delivery = await createDeliveryUseCase.execute({
      idClient,
      itemName,
    });
    return response.json(delivery);
  }
}
