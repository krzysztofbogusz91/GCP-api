import { searchDb } from "./../helpers/searchDb";
import * as bcrypt from "bcrypt";
import { users } from "./../../seeds/test-db";
import { config } from "./../config";

export class UserModel {
  getAllUsers() {
    return Promise.resolve(users);
  }
  hashPassword(password) {
    //salt and hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    return hash;
  }
}

export const userModel = new UserModel();
