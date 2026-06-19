import { Router } from "express";
import CustomersController from "./app/controllers/CustomersController.js"

const customers = CustomersController;
const routes = new Router();


routes.get("/customers", customers.index);
routes.get("/customers/:id", customers.show);
routes.post("/customers", customers.create);
routes.put("customers/:id", customers.update);
routes.delete("customers/:id", customers.destroy);

export default routes;
