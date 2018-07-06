import { User } from "./../models/user.interface";
import { users } from './../../seeds/test-db';

export const searchDb = (email: string) => {
  const db: User[] = users;
  const result = db.filter(userDb => email === userDb.email);
  return result[0] ? Promise.resolve(result[0]) : Promise.reject(false);
};
