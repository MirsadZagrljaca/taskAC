import express from "express";
import programController from "../controllers/program.controller";
const router = express.Router();

router.route("/program").post(programController.create);
router.route("/program").get(programController.list);
router.param("programId", programController.programById);
router.route("/program/:programId").get(programController.read);
router.route("/program/:programId").put(programController.update);
router.route("/program/:programId").delete(programController.remove);

export default router;
