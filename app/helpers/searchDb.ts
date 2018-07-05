import { User } from "./../models/user.interface";

export const searchDb = (db: User[], email: string) => {
  const result = db.filter(userDb => email === userDb.email);
  return result[0] ? Promise.resolve(result[0]) : Promise.reject(false);
};
