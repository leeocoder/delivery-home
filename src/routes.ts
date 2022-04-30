import { Router } from "express";
import { CreateClienteController } from "./modules/clients/useCases/create-client/create-client-controller";
const routes = Router();
const createClienteController = new CreateClienteController();
routes.post("/client", createClienteController.handle);
export { routes };
