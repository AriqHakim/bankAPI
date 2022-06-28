import { Request, Response } from "express";
import BankerClientServices from "../services/bankers_and_clients";

class BankerClientController {
  public async connectBankerToClient(req: Request, res: Response) {
    try {
      const bankerId = parseInt(req.params.bankerId);
      const clientId = parseInt(req.params.clientId);
      const response = await new BankerClientServices().connectBankerToClient(
        bankerId,
        clientId
      );
      return res.json(response);
    } catch (error) {
      return res.send(error);
    }
  }
}

export default BankerClientController;
