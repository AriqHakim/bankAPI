import { Banker } from "../entities/banker";
import { Client } from "../entities/client";

class BankerClientServices {
  public async connectBankerToClient(bankerId: number, clientId: number) {
    const client = await Client.findOne({ where: { id: clientId } });
    const banker = await Banker.findOne({ where: { id: bankerId } });

    if (!banker || !client) {
      return { msg: "Banker or client not found" };
    }

    banker.clients = [client];
    console.log(banker.clients);
    await banker.save();

    return { msg: "banker connected to client" };
  }
}

export default BankerClientServices;
