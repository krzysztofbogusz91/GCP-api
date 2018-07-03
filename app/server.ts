import * as Express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as mysql from "mysql";
import { config } from "./config";
import {usersRoute} from './routes/users.route'
const app = Express();
const setUp = config.setUp;

app.use(cors());

app.listen(config.port, () => {
  console.log("server is running on port ", config.port);
  app.use('/users', usersRoute)
});
