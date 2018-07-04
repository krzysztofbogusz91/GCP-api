import { Request, Response } from "express";
import { users } from './../../seeds/test-db';

export class UsersController {
  public getUsers(req: Request, res: Response) {
    console.log("get users works");

    res.status(200).send(users)
  }

  public getUser(req: Request, res: Response) {
    console.log("get users works");

    res.status(200).send(users[0])
  }

  public postUser(req: Request, res: Response) {
    console.log("get users works");

    res.status(200).send({msg: "post user to db, register"})
  }
}

export const controller = new UsersController();
