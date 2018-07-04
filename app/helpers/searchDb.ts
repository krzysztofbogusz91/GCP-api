
import { User } from './../models/user.interface';

export const searchDb = (db: User[], user: User) => {
    const result = db.filter(userDb => user === userDb)
    return result[0] ?
            result[0] :
            false
}