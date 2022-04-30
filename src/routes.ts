import { Router } from "express";
import { AuthenticateUserController } from "./modules/account/authenticate-user/authenticate-user-controller";
import { CreateClienteController } from "./modules/clients/useCases/create-client/create-client-controller";
const routes = Router();
const createClienteController = new CreateClienteController();
const authenticateUserController = new AuthenticateUserController();

routes.post("/client", createClienteController.handle);
routes.post("/auth", authenticateUserController.handle);
export { routes };
