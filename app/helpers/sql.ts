import * as mysql from "mysql";
import { config } from "../config";
import { User } from "../models/user.interface";

const setUp = config.setUp;

export class SQL {
  sqlGetAll() {
    return new Promise((resolve, reject) => {
      const con = mysql.createConnection(setUp);
      //start sql
      con.connect(function(err) {
        if (err) return reject(err);
        console.log("Connected!");
      });

      con.query("select * from test_ui", function(err, result) {
        if (err) return reject(err);
        return resolve(result.map(elem => elem));
      });

      //end sql
      con.end();
    });
  }

  sqlFindAndReturn(email) {
    return new Promise((resolve, reject) => {
      const con = mysql.createConnection(setUp);
      //start sql
      con.connect(function(err) {
        if (err) return reject(err);
        console.log("Connected!");
      });

      con.query(
        `select * from test_ui where email=${mysql.escape(email)}`,
        function(err, result: User[]) {
          if (err) return reject(err);
          if (result.length > 0) {
            return resolve(result[0]);
          } else {
            return reject({ message: "no user in db" });
          }
        }
      );
      //end sql
      con.end();
    });
  }

  sqlPostToDb(user) {
    return new Promise((resolve, reject) => {
      const con = mysql.createConnection(setUp);
      //start sql
      con.connect(function(err) {
        if (err) return reject(err);
        console.log("Connected!");
      });
      const sql = `insert into test_ui (name, email, password) VALUES ('${
        user.name
      }', '${user.email}', '${user.password}')`;

      con.query(sql, function(err, result) {
        if (err) return reject(err);

        return resolve({msg: 'user successfully added'});
      });
      con.end();
    });
  }

  //sqlFindAndUpdate() {}
}

export const sql = new SQL();
