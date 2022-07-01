import { Client } from "../entities/client";
import { Transaction, TransactionTypes } from "../entities/transaction";
import { InterfaceTransaction } from "../interface/transaction";

class TransactionServices {
  public async createTransaction(
    bodyParams: InterfaceTransaction,
    clientId: number
  ) {
    const client = await Client.findOne({ where: { id: clientId } });

    if (client === null) {
      return { msg: "client not found!" };
    }

    const transaction = Transaction.create({
      type: bodyParams.type,
      amount: bodyParams.amount,
      client,
    });
    await transaction.save();

    if (typeof client.balance == "string") {
      if (bodyParams.type === TransactionTypes.DEPOSIT) {
        client.balance = parseFloat(client.balance) + bodyParams.amount;
      } else if (bodyParams.type === TransactionTypes.WITHDRAW) {
        client.balance = parseFloat(client.balance) - bodyParams.amount;
      }
    }

    await client.save();

    return { msg: "transaction added" };
  }

  public async getClientTransactions(clientId: number) {
    const client = await Client.findOne({ where: { id: clientId } });

    if (client === null) {
      return { msg: "client not found!" };
    }

    const transactions = await Transaction.createQueryBuilder("transaction")
      .innerJoinAndSelect("transaction.client", "client")
      .where("transaction.client_id = :id", { id: clientId })
      .getMany();

    return transactions;
  }

  public async getClientTransactionsById(
    clientId: number,
    transactionId: number
  ) {
    const client = await Client.findOne({ where: { id: clientId } });

    if (client === null) {
      return { msg: "client not found!" };
    }

    const transactions = await Transaction.createQueryBuilder("transaction")
      .innerJoinAndSelect("transaction.client", "client")
      .where("transaction.client_id = :idClient", { idClient: clientId })
      .andWhere("transaction.id = :idTransaction", {
        idTransaction: transactionId,
      })
      .getMany();

    return transactions;
  }
}

export default TransactionServices;
