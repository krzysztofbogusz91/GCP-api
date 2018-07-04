import { searchDb } from './searchDb';
import { users } from './../../seeds/test-db';
import * as expect from "expect";

const fakeUser = {id:1, name: 'am', email: '', password: '12345'}

describe('searchDb', () => {
    it('should return user if user is present in results arr ', () => {
        expect(searchDb(users, users[0])).toEqual(users[0])
    });
    it('should return false if user is not in result arr', () => {
       
        expect(searchDb(users, fakeUser )).toEqual(false)
    });
});