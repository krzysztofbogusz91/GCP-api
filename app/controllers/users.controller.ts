import { Request, Response } from "express";

export class UsersController {
  public getUsers(req: Request, res: Response) {
    console.log("get users works");

    res.status(200).send({msg: " get all users works fine"})
  }

  public getUser(req: Request, res: Response) {
    console.log("get users works");

    res.status(200).send({msg: "get user account and data"})
  }

  public postUser(req: Request, res: Response) {
    console.log("get users works");

    res.status(200).send({msg: "post user to db, register"})
  }
}

export const controller = new UsersController();
