import { Request, Response } from "express";
import { users } from './../../seeds/test-db';
import { errorHandler } from "../helpers/error.helper";
import { userModel } from "../models/user.model";

export class UsersController {
  public getUsers(req: Request, res: Response) {
    const onError = errorHandler(res)
    console.log("get users works");
    const usersDb = users;

    return res.status(200).send(usersDb)
  }

  public getUser(req: Request, res: Response) {
    console.log("get users works");
    const head = req.headers
    console.log(head)

    res.status(200).send(users[0])
  }

  public postUser(req: Request, res: Response) {
    console.log("post user");
    const password = userModel.hashPassword(req.body.password)
    console.log(password);
    const name = req.body.name;
    const email = req.body.email;
    const newUser = {password, name, email}
    //here goes add user to db method
    users.push(newUser)

    res.status(200).send({msg: "post user to db, register"})
  }
}

export const controller = new UsersController();
