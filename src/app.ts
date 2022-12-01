import cors from "cors";
import express, { Application } from "express";
import { errorHandler } from "./middlewares/errorHandler";

// Import Routers
import { router } from "./routes/index.route";

export const app: Application = express();

//Middleware
app.use(cors());
app.use(express.json());

//Router config
app.use(router);

//ErrorHandle
app.use(errorHandler);
