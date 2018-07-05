import { Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { config } from "./../config";
import { users } from "./../../seeds/test-db";
import { searchDb } from "./../helpers/searchDb";
import { userModel } from "./../models/user.model";
import * as bcrypt from "bcrypt";
import { errorHandler } from "../helpers/error.helper";


export class AuthController {
  private getToken(user) {
    return jwt.sign({ user }, config.secret, { expiresIn: 100000 });
  }

  public logIn(req: Request, res: Response) {
    console.log("get users works");
    const onError = errorHandler(res)
    const email = req.body.email;
    const isPasswordCorrect = bcrypt.compareSync(req.body.password);
    const db = users;
    if(!isPasswordCorrect){
      return res.status(401).send({err: 'Incorrect password'})
    }
    searchDb(db, email).then(
      result => {
        const token = controllerAuth.getToken(result.email);
        return res.status(200).send({token:token});
      },
      err => {
        return res
          .status(401)
          .send({ err: "user not found, or password not matching" });
      }
    );
  }
}

export const controllerAuth = new AuthController();
