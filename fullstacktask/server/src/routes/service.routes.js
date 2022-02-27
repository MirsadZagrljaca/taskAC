import express from "express";
import serviceController from "../controllers/service.controller";
const router = express.Router();

router.route("/service").post(serviceController.create);
router.route("/service").get(serviceController.list);
router.param("serviceId", serviceController.serviceById);
router.route("/service/:serviceId").get(serviceController.read);
router.param("customerId", serviceController.serviceByCustomer);
router
  .route("/service/customer/:customerId")
  .get(serviceController.readByCustomers);

export default router;
