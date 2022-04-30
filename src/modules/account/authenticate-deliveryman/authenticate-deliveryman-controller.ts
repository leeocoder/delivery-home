import { Request, Response } from "express";
import { AuthenticateDeliverymanUseCase } from "./authenticate-deliveryman-usecase";
export class AuthenticateDeliverymanController {
  async handle(request: Request, response: Response) {
    const { username, password } = request.body;
    const authenticateUserUseCase = new AuthenticateDeliverymanUseCase();
    const result = await authenticateUserUseCase.execute({
      username,
      password,
    });
    return response.json(result);
  }
}
