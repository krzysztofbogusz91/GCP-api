
import { searchDb } from './../helpers/searchDb';
import { users } from './../../seeds/test-db';

export class UserModel{
    getAllUsers(){
        return Promise.resolve(users)
    }
    findUser(email, password){
        this.getAllUsers().then(dbContent => {
            searchDb(dbContent, email, password)
        })
        
    }
}