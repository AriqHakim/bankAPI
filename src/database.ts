// import { DataSource } from "typeorm";
// import { Banker } from "./entities/banker";
// import { Client } from "./entities/client";
// import { Transaction } from "./entities/transaction";

const { DataSource } = require("typeorm");
const { Banker } = require("./entities/banker");
const { Client } = require("./entities/client");
const { Transaction } = require("./entities/transaction");
import {
  HOST,
  DB_PORT,
  DB_USERNAME,
  DB_PASSWORD,
  DB_NAME,
} from "./../src/config/index";

const database = new DataSource({
  type: "postgres",
  host: HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_NAME,
  entities: [Client, Banker, Transaction],
  migrations: ["./src/migration/*.ts"],
  synchronize: false,
});

export default database;
