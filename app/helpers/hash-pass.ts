import * as bcrypt from "bcrypt";

export const hashAndSalt = (password) =>{
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash;
}

