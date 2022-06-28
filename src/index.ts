import express, { Express } from "express";
import bodyParser from "body-parser";
import database from "./database";
import clientsRouter from "./routes/clients";
import bankersRouter from "./routes/bankers";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import cors from "cors";
import { PORT } from "./config";

const app: Express = express();

const swaggerFile: any = process.cwd() + "/swagger.json";
const swaggerData: any = fs.readFileSync(swaggerFile, "utf8");
const swaggerDocument = JSON.parse(swaggerData);

database
  .initialize()
  .then(() => {
    console.log("Data Source has been initialized!");
  })
  .catch((err: any) => {
    console.error("Error during Data Source initialization\n", err);
  });

app.use(bodyParser.json());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(PORT, () => {
  console.log(`Server is running on port : http://localhost:${PORT}`);
});

app.get("/", (req: express.Request, res: express.Response) => {
  res.send("RestFul API with TypeORM connected");
});
app.use("/client", clientsRouter);
app.use("/banker", bankersRouter);
