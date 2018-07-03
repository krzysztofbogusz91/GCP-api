export const config = {
  // name: 'appointments-api',
  // version: '1.0.0',
  // env: process.env.NODE_ENV || 'development',

   port: process.env.PORT || 3000,
   setUp:{
    host: "35.234.125.240",
    port: 3306,
    user: "bs_user",
    password: "bs_user",
    database: "bs_database",
    acquireTimeout: 1000000
  },
  secret: '1234'

  // db: {
  //   uri: `mongodb://appointments_api:Mnbvcxz12345@ds263660.mlab.com:63660/appointments_db`
  // },
  // jwt_secret: 'your-secret-key',
  // jwt_expires_in: 86400 // 24 hours
};