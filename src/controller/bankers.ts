import { Request, Response } from "express";
import BankerService from "../services/bankers";

class BankerController {
  public async createBanker(req: Request, res: Response) {
    try {
      const response = await new BankerService().createBanker(req.body);
      return res.json(response);
    } catch (error) {
      return res.send(error);
    }
  }

  public async deleteBanker(req: Request, res: Response) {
    try {
      const bankerId = parseInt(req.params.id);
      const response = await new BankerService().deleteBanker(bankerId);
      return res.json(response);
    } catch (error) {
      return res.json(error);
    }
  }

  public async getBankers(req: Request, res: Response) {
    try {
      const bankers = await new BankerService().getBankers();
      // const bankers = await this.bankersServices.getBankers();
      // const bankers = await Banker.find();
      return res.json(bankers);
    } catch (error) {
      return res.json(error);
    }
  }

  public async getBankerById(req: Request, res: Response) {
    try {
      const bankerId = parseInt(req.params.id);
      // const banker = await Banker.findOne({ where: { id: bankerId } });
      const banker = await new BankerService().getBankerById(bankerId);
      return res.json(banker);
    } catch (error) {
      return res.json(error);
    }
  }

  public async updateBanker(req: Request, res: Response) {
    try {
      // const banker = await Banker.findOne({ where: { id: bankerId } });
      const bankerId = parseInt(req.params.id);
      const banker = await new BankerService().updateBanker(bankerId, req.body);
      return res.json(banker);
    } catch (error) {
      return res.json(error);
    }
  }
}

export default BankerController;
