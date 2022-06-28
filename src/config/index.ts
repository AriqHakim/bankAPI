import { config } from "dotenv";
config({ path: "./.env" });

export const { PORT, DB_PORT, DB_USERNAME, DB_PASSWORD, DB_NAME } = process.env;
