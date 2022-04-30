import { Router } from "express";
import { AuthenticateUserController } from "./modules/account/authenticate-user/authenticate-user-controller";
import { CreateClienteController } from "./modules/clients/useCases/create-client/create-client-controller";
import { CreateDeliveryController } from "./modules/deliveryman/create-deliveryman-controller";
const routes = Router();
const createClienteController = new CreateClienteController();
const createDeliverymanUseCase = new CreateDeliveryController();
const authenticateUserController = new AuthenticateUserController();

routes.post("/client", createClienteController.handle);
routes.post("/deliveryman", createDeliverymanUseCase.handle);
routes.post("/auth/client", authenticateUserController.handle);
routes.post("/auth/deliveryman", authenticateUserController.handle);
export { routes };
