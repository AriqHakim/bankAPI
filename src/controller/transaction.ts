import { Request, Response } from "express";
import TransactionServices from "../services/transaction";

class TransactionController {
  public async createTransaction(req: Request, res: Response) {
    try {
      const clientId = parseInt(req.params.id);
      const response = await new TransactionServices().createTransaction(
        req.body,
        clientId
      );
      return res.json(response);
    } catch (error) {
      return res.json(error);
    }
  }
  public async getClientTransactions(req: Request, res: Response) {
    try {
      const clientId = parseInt(req.params.id);
      const response = await new TransactionServices().getClientTransactions(
        clientId
      );
      return res.json(response);
    } catch (error) {
      return res.json(error);
    }
  }
  public async getClientTransactionsById(req: Request, res: Response) {
    try {
      const clientId = parseInt(req.params.clientId);
      const transactionnId = parseInt(req.params.transactionId);
      const response =
        await new TransactionServices().getClientTransactionsById(
          clientId,
          transactionnId
        );
      return res.json(response);
    } catch (error) {
      return res.json(error);
    }
  }
}

export default TransactionController;
