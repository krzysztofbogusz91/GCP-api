import { users } from "./../../seeds/test-db";
import { config } from "./../config";
import { User } from "./user.interface";
import { sql } from "../helpers/sql";
import { hashAndSalt } from './../helpers/hash-pass';


export class UserModel {
  getAllUsers() {
    if (config.env === "dev") {
      return Promise.resolve(users);
    } else {
      return sql.sqlGetAll();
    }
  }

  hashPassword(password) {
    return hashAndSalt(password)
  }

  //add user to db method
  addUserToDb(user: User) {
    if (config.env === "dev") {
      users.push(user);
    } else {
      return sql.sqlPostToDb(user);
    }
    return Promise.resolve({ ok: true });
  }
}

export const userModel = new UserModel();
