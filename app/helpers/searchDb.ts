
import { User } from './../models/user.interface';

export const searchDb = (db: User[], email: string, password: string) => {


    const result = db.filter(userDb =>userDb.password === password && email === userDb.email)
    return result[0] ?
            Promise.resolve(result[0]) :
            Promise.reject(false)
}