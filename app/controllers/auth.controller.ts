import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { config } from './../config';

export class AuthController {
  private getToken(user){
    return jwt.sign(
      {user},
      config.secret,
      {expiresIn: 100000}

    )
  }

  public logIn(req: Request, res: Response) {
    console.log("get users works");

    res.status(200).send({msg: "user successfully log in pass and email correct "})
  }
}

export const controller = new AuthController();
