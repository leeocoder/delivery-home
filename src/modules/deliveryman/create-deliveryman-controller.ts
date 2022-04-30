import { CreateDeliverymanUseCase } from "./create-deliveryman-usecase";
import { Request, Response } from "express";

export class CreateDeliveryController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;
    const createDeliveryUseCase = new CreateDeliverymanUseCase();
    const result = await createDeliveryUseCase.execute({ username, password });
    return response.json(result);
  }
}
