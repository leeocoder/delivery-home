import { AuthenticateDeliverymanController } from "./modules/account/authenticate-deliveryman/authenticate-deliveryman-controller";
import { CreateDeliveryController } from "./modules/deliveries/usecases/create-delivery/create-delivery-controller";
import { Router } from "express";
import { AuthenticateUserController } from "./modules/account/authenticate-user/authenticate-user-controller";
import { CreateClienteController } from "./modules/clients/useCases/create-client/create-client-controller";
import { CreateDeliverymanController } from "./modules/deliveryman/create-deliveryman-controller";
import { ensureAuthenticateClient } from "./middlewares/ensure-authenticate-client";
const routes = Router();

const createClienteController = new CreateClienteController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateUserController = new AuthenticateUserController();
//prettier-ignore
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();

routes.post("/client", createClienteController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);
routes.post("/auth/client", authenticateUserController.handle);
routes.post("/auth/deliveryman", authenticateDeliverymanController.handle);
//prettier-ignore
routes.post("/deliveries", ensureAuthenticateClient, createDeliveryController.handle);
export { routes };
