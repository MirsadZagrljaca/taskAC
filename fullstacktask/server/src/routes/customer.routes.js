import express from "express";
import customerController from "../controllers/customer.controller";
const router = express.Router();

router.route("/customer").post(customerController.create);
router.route("/customer").get(customerController.list);
router.param("customerId", customerController.customerById);
router.route("/customer/update/:customerId").put(customerController.updateForDiscount);
router.route("/customer/limit/:limit").get(customerController.getCustomers);
router.route("/customer/find/:search").get(customerController.searchCustomers);

export default router;
