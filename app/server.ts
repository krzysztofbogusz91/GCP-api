import * as Express from "express";
import * as cors from "cors";
import { config } from "./config";
import { usersRoute } from "./routes/users.route";

 
const app = Express();

app.use(cors());
app.use(Express.json())



app.listen(config.port, () => {
  console.log("server is running on port ", config.port);
  app.use("/users", usersRoute);
});

