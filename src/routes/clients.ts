import { Router } from "express";
import ClientController from "../controller/clients";
import TransactionController from "../controller/transaction";

const router = Router();
const ClientControllers = new ClientController();
const TransactionControllers = new TransactionController();

router.get("/", ClientControllers.getClients);
router.get("/:id", ClientControllers.getClientById);
router.post("/", ClientControllers.createClient);
router.delete("/:id", ClientControllers.deleteClient);
router.put("/:id", ClientControllers.updateClient);

router.post("/:id/transaction", TransactionControllers.createTransaction);
router.get("/:id/transaction", TransactionControllers.getClientTransactions);
router.get(
  "/:clientId/transaction/:transactionId",
  TransactionControllers.getClientTransactionsById
);

export default router;
