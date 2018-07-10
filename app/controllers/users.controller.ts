import { Request, Response } from "express";
import { users } from "./../../seeds/test-db";
import { errorHandler } from "../helpers/error.helper";
import { userModel } from "../models/user.model";
import { searchDb } from "../helpers/searchDb";
import { sql } from "../helpers/sql";
import { config } from "../config";
import { User } from "../models/user.interface";

const search = config.env === "dev" ? searchDb : sql.sqlFindAndReturn;

export class UsersController {
  //remove from production
  public getUsers(req: Request, res: Response) {
    const onError = errorHandler(res);
    
    //const usersDb = users;
    userModel.getAllUsers().then(usersDb =>{
      return res.status(200).send(usersDb);
    }).catch(err =>{
      onError(404, 'internal err')
    })
  }

  public getUser(req: Request, res: Response) {
    const onError = errorHandler(res);
    const email = req["email"];
    search(email).then(
      (result: User) => {
        const publicUser = {
          name: result.name,
          email: result.email
        };
        return res.status(200).send(publicUser);
      },
      err => {
        return onError(404, "user not found");
      }
    );
  }

  public postUser(req: Request, res: Response) {
    const onError = errorHandler(res);
    const password = userModel.hashPassword(req.body.password);
    const name = req.body.name;
    const email = req.body.email;
    const newUser = { password, name, email };

    userModel.addUserToDb(newUser).then(
      data => {
        console.log(data);
        return res.status(200).send({ msg: "post user to db, register" });
      },
      err => onError(500, "user not added, internal err")
    );
  }
}

export const controller = new UsersController();
