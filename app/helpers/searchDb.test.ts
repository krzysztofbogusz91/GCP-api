import { searchDb } from './searchDb';
import { users } from './../../seeds/test-db';
import * as expect from "expect";

const fakeUser = {id:1, name: 'am', email: '', password: '12345'}

describe('searchDb', () => {
    it('should return user if user is present in results arr ', (done) => {
        expect(searchDb(users, 'ab@gamil.com', '1234').then(data => {
            expect(data).toEqual(users[0])
            
        }))
        done()
    });
    it('should return false if user is not in result arr', () => {
       
        expect(searchDb(users, fakeUser.email, fakeUser.password ).then(data => {
            
        }, err => {
            expect(err).toEqual(false)
        }))
    });
});