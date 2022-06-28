import { Client } from "../entities/client";
import { InterfaceClient } from "../interface/client";

class ClientService {
  public async createClient(bodyParams: InterfaceClient) {
    const client: Client = await Client.create({
      first_name: bodyParams.firstName as string,
      last_name: bodyParams.lastName as string,
      email: bodyParams.email,
      card_number: bodyParams.cardNumber as string,
      balance: bodyParams.balance,
      is_active: bodyParams.isActive,
      additional_info: bodyParams.additionalInfo,
      family_member: bodyParams.familiyMember,
    });
    return client.save();
  }

  public async deleteClient(clientId: number) {
    return await Client.delete(clientId);
  }

  public async getClients() {
    return await Client.find();
  }

  public async getClientById(clientId: number) {
    return await Client.findOne({ where: { id: clientId } });
  }

  public updateClient(clientId: number, bodyParams: InterfaceClient) {
    const client: Client = Client.create({
      id: clientId,
      first_name: bodyParams.firstName as string,
      last_name: bodyParams.lastName as string,
      email: bodyParams.email,
      card_number: bodyParams.cardNumber as string,
      balance: bodyParams.balance,
      is_active: bodyParams.isActive,
      additional_info: bodyParams.additionalInfo,
      family_member: bodyParams.familiyMember,
    });
    return client.save();
  }
}

export default ClientService;
