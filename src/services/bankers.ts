import { Banker } from "../entities/banker";
import { InterfaceBanker } from "../interface/banker";

class BankerService {
  public async createBanker(bodyParams: InterfaceBanker) {
    const banker: Banker = await Banker.create({
      first_name: bodyParams.firstName as string,
      last_name: bodyParams.lastName as string,
      email: bodyParams.email,
      card_number: bodyParams.cardNumber as string,
      employee_number: bodyParams.employeeNumber,
    });
    return banker.save();
  }

  public async deleteBanker(bankerId: number) {
    return await Banker.delete(bankerId);
  }

  public async getBankers() {
    return await Banker.find();
  }

  public async getBankerById(bankerId: number) {
    return await Banker.findOne({ where: { id: bankerId } });
  }

  public updateBanker(bankerId: number, bodyParams: InterfaceBanker) {
    const banker: Banker = Banker.create({
      id: bankerId,
      first_name: bodyParams.firstName as string,
      last_name: bodyParams.lastName as string,
      email: bodyParams.email,
      card_number: bodyParams.cardNumber as string,
      employee_number: bodyParams.employeeNumber,
    });
    return banker.save();
  }
}

export default BankerService;
