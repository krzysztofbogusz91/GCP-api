import { Request, Response } from "express";
import { users } from "./../../seeds/test-db";
import { errorHandler } from "../helpers/error.helper";
import { userModel } from "../models/user.model";
import { searchDb } from "../helpers/searchDb";

export class UsersController {
  //remove from production
  public getUsers(req: Request, res: Response) {
    const usersDb = users;
    return res.status(200).send(usersDb);
  }

  public getUser(req: Request, res: Response) {
    const onError = errorHandler(res);
    const email = req["email"];
    searchDb(users, email).then(
      result => {
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
        if (data.ok) {
          return res.status(200).send({ msg: "post user to db, register" });
        }
        return onError(500, "internal error");
      },
      err => onError(500, "user not added, internal err")
    );
  }
}

export const controller = new UsersController();
