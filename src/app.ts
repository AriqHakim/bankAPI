import express, { Express } from "express";
import bodyParser from "body-parser";
import database from "./database";
import clientsRouter from "./routes/clients";
import bankersRouter from "./routes/bankers";
import swaggerUi from "swagger-ui-express";
import fs from "fs";
import cors from "cors";
import { HOST, PORT } from "./config";

class App {
  public app: Express;
  public env: string;
  public port: string | number;

  constructor() {
    this.app = express();
    this.port = PORT || 3000;

    this.initializeDatabase();
    this.initializeMiddlewares();
    this.initializeRoutes();
    this.initializeSwagger();
  }

  public listen() {
    this.app.listen(PORT, () => {
      console.log(`Server is running on port : http://${HOST}:${PORT}`);
    });
  }

  public getServer() {
    return this.app;
  }

  private async initializeDatabase() {
    await database
      .initialize()
      .then(() => {
        console.log("Data Source has been initialized!");
      })
      .catch((err: any) => {
        console.error("Error during Data Source initialization\n", err);
      });
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors());
  }

  private initializeRoutes() {
    this.app.get("/", (req: express.Request, res: express.Response) => {
      res.send("RestFul API with TypeORM connected");
    });
    this.app.use("/client", clientsRouter);
    this.app.use("/banker", bankersRouter);
  }

  private initializeSwagger() {
    const swaggerFile: any = process.cwd() + "/swagger.json";
    const swaggerData: any = fs.readFileSync(swaggerFile, "utf8");
    const swaggerDocument = JSON.parse(swaggerData);
    this.app.use(
      "/api-docs",
      swaggerUi.serve,
      swaggerUi.setup(swaggerDocument)
    );
  }
}

export default App;
