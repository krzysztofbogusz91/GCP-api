import * as bcrypt from "bcrypt";
import { users } from "./../../seeds/test-db";
import { config } from "./../config";
import { User } from "./user.interface";
import { sql } from "../helpers/sql";

export class UserModel {
  getAllUsers() {
    if (config.env === "dev") {
      return Promise.resolve(users);
    } else {
      return sql.sqlGetAll()
    }

    
  }
  hashPassword(password) {
    //salt and hash password
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);

    return hash;
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
