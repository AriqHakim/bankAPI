import { Request, Response } from "express";
import ClientService from "../services/clients";

class ClientController {
  public async createClient(req: Request, res: Response) {
    try {
      const response = await new ClientService().createClient(req.body);
      return res.json(response);
    } catch (error) {
      return res.json(error);
    }
  }

  public async deleteClient(req: Request, res: Response) {
    try {
      const clientId = parseInt(req.params.id);
      const response = await new ClientService().deleteClient(clientId);
      return res.json(response);
    } catch (error) {
      return res.json(error);
    }
  }

  public async getClients(req: Request, res: Response) {
    try {
      const clients = await new ClientService().getClients();
      // const clients = await this.clientsServices.getClients();
      // const clients = await Client.find();
      return res.json(clients);
    } catch (error) {
      return res.json(error);
    }
  }

  public async getClientById(req: Request, res: Response) {
    try {
      const clientId = parseInt(req.params.id);
      // const client = await Client.findOne({ where: { id: clientId } });
      const client = await new ClientService().getClientById(clientId);
      return res.json(client);
    } catch (error) {
      return res.json(error);
    }
  }

  public async updateClient(req: Request, res: Response) {
    try {
      // const client = await Client.findOne({ where: { id: clientId } });
      const clientId = parseInt(req.params.id);
      const client = await new ClientService().updateClient(clientId, req.body);
      return res.json(client);
    } catch (error) {
      return res.json(error);
    }
  }
}

export default ClientController;
