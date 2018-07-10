export const config = {
   port: process.env.PORT || 3000,
   setUp:{
    host: "127.0.0.1",
    port: 3306,
    user: "bs_user",
    password: "bs_user",
    database: "bs_database",
    acquireTimeout: 1000000
  },
  secret: '1234',
  //dev || prod
  env: 'dev'
};

// "35.234.125.240"