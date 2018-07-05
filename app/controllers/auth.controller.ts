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
    const onError = errorHandler(res);
    const email = req.body.email;
    const db = users;

    searchDb(db, email).then(
      result => {
        const isPasswordCorrect = bcrypt.compareSync(
          req.body.password,
          result.password
        );
        if (!isPasswordCorrect) {
          return onError(401, "wrong password");
        }
        const token = controllerAuth.getToken(result.email);
        return res.status(200).send({ token });
      },
      err => {
        return onError(400, "user not found");
      }
    );
  }
}

export const controllerAuth = new AuthController();
