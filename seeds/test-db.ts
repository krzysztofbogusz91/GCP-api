console.log("mock db here");
import { User } from "./../app/models/user.interface";
import { userModel } from "../app/models/user.model";

export const users: User[] = [
  {
    id: 1,
    name: "test",
    email: "ab@gamil.com",
    password: userModel.hashPassword("1234")
  },
  {
    id: 2,
    name: "test2",
    email: "ab2@gamil.com",
    password: userModel.hashPassword("1234")
  }

];
