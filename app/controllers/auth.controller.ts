import { Request, Response } from 'express';
import * as jwt from 'jsonwebtoken';
import { config } from './../config';
import { users } from './../../seeds/test-db';
import { searchDb } from './../helpers/searchDb';

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
    const db = users;
    const email = req.body.email;
    const password = req.body.password;

    searchDb(db, email, password)
    
     
    res.status(200).send({msg: "user successfully log in pass and email correct "})
  }
}

export const controllerAuth = new AuthController();
