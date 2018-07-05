import { searchDb } from "./../helpers/searchDb";
import * as bcrypt from "bcrypt";
import { users } from "./../../seeds/test-db";
import { config } from './../config';

export class UserModel {
  getAllUsers() {
    return Promise.resolve(users);
  }
  hashPassword(password) {
    //salt and hash password
    const salt = config.secret
    bcrypt.genSalt(10, (err, salt) => {
      bcrypt.hash(password, salt, (err, hash) => {
        password = hash;
        return password;
      });
    });
  }
}

export const userModel = new UserModel();
