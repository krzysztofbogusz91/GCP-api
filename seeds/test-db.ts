import { User } from "./../app/models/user.interface";
import { hashAndSalt } from './../app/helpers/hash-pass';

export const users: User[] = [
  {
    id: 1,
    name: "test",
    email: "ab@gamil.com",
    password: hashAndSalt("1234")
  },
  {
    id: 2,
    name: "test2",
    email: "ab2@gamil.com",
    password: hashAndSalt("1234")
  }

];
