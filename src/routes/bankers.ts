import { Router } from "express";
import BankerController from "../controller/bankers";
import BankerClientController from "../controller/bankers_and_clients";

const router = Router();
const BankerControllers = new BankerController();
const BankerClientControllers = new BankerClientController();

router.get("/", BankerControllers.getBankers);
router.get("/:id", BankerControllers.getBankerById);
router.post("/", BankerControllers.createBanker);
router.delete("/:id", BankerControllers.deleteBanker);
router.put("/:id", BankerControllers.updateBanker);

router.post(
  "/:bankerId/client/:clientId",
  BankerClientControllers.connectBankerToClient
);

export default router;
