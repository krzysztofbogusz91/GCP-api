import * as expect from "expect";
import { userModel } from "./user.model";

describe('userModel methods', () => {
    it('should create hashed and salted password', () => {
        const pass = '1234'
        expect(userModel.hashPassword(pass)).not.toEqual(pass)
    });
});