import { UpdateEndDateController } from "./modules/deliveries/usecases/update-end-date/update-end-date-controller";
import { FindAllDeliveriesByDeliverymanController } from "./modules/deliveryman/deliveries/find-all-deliveries-by-deliveryman-controller";
import { FindAllDeliveriesController } from "./modules/clients/deliveries/find-all-deliveries-controller";
import { UpdateDeliverymanController } from "./modules/deliveries/usecases/update-deliveryman/update-deliveryman-controller";
import { FindAllAvailableController } from "./modules/deliveries/usecases/find-all-available/find-all-available-controller";
import { AuthenticateDeliverymanController } from "./modules/account/authenticate-deliveryman/authenticate-deliveryman-controller";
import { CreateDeliveryController } from "./modules/deliveries/usecases/create-delivery/create-delivery-controller";
import { Router } from "express";
import { AuthenticateUserController } from "./modules/account/authenticate-user/authenticate-user-controller";
import { CreateClienteController } from "./modules/clients/useCases/create-client/create-client-controller";
import { CreateDeliverymanController } from "./modules/deliveryman/create-deliveryman-controller";
import { ensureAuthenticateClient } from "./middlewares/ensure-authenticate-client";
import { ensureAuthenticateDeliveryman } from "./middlewares/ensure-authenticate-deliveryman";
const routes = Router();

const createClienteController = new CreateClienteController();
const createDeliverymanController = new CreateDeliverymanController();
const authenticateUserController = new AuthenticateUserController();
//prettier-ignore
const authenticateDeliverymanController = new AuthenticateDeliverymanController();
const createDeliveryController = new CreateDeliveryController();
const findAllAvailableController = new FindAllAvailableController();
const updateDeliverymanController = new UpdateDeliverymanController();
const findAllDeliveriesController = new FindAllDeliveriesController();
const updateEndDateController = new UpdateEndDateController();
//prettier-ignore
const findAllDeliveriesByDeliverymanController = new FindAllDeliveriesByDeliverymanController();

routes.post("/client", createClienteController.handle);
routes.post("/deliveryman", createDeliverymanController.handle);
routes.post("/auth/client", authenticateUserController.handle);
routes.post("/auth/deliveryman", authenticateDeliverymanController.handle);
//prettier-ignore
routes.post("/delivery", ensureAuthenticateClient, createDeliveryController.handle);
//prettier-ignore
routes.put("/delivery/updateDeliveryman/:id", ensureAuthenticateDeliveryman, updateDeliverymanController.handle);
//prettier-ignore
routes.get("/delivery/available", ensureAuthenticateDeliveryman, findAllAvailableController.handle);
//prettier-ignore
routes.put("/delivery/updateEndDate/:id", ensureAuthenticateDeliveryman, updateEndDateController.handle);
//prettier-ignore
routes.get("/client/deliveries", ensureAuthenticateClient, findAllDeliveriesController.handle)
//prettier-ignore
routes.get("/deliveryman/deliveries", ensureAuthenticateDeliveryman, findAllDeliveriesByDeliverymanController.handle)
export { routes };
