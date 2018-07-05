import { searchDb } from "./../helpers/searchDb";
import * as bcrypt from "bcrypt";
import { users } from "./../../seeds/test-db";
import { config } from "./../config";
import { User } from "./user.interface";

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

  //add user to db method
  addUserToDb(user: User) {
    users.push(user);
    return Promise.resolve({ ok: true });
  }
}

export const userModel = new UserModel();
