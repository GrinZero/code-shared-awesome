// src/config/ts

const MYSQL = {
  DB_NAME: "ts",
  HOST: "127.0.0.1",
  PORT: 3306,
  USER_NAME: "admin",
  PASSWORD: "admin",
  CONNECTION_LIMIT: 60 * 60 * 1000,
  CONNECT_TIMEOUT: 1000 * 60 * 60 * 1000,
  ACQUIRE_TIMEOUT: 60 * 60 * 1000,
  TIMEOUT: 1000 * 60 * 60 * 1000,
};

const config = {
  host: MYSQL.HOST,
  port: MYSQL.PORT,
  user: MYSQL.USER_NAME,
  password: MYSQL.PASSWORD,
  database: MYSQL.DB_NAME,
  multipleStatements: true, // 运行执行多条语句
  connectionLimit: MYSQL.CONNECTION_LIMIT,
  connectTimeout: MYSQL.CONNECT_TIMEOUT,
  acquireTimeout: MYSQL.ACQUIRE_TIMEOUT,
  timeout: MYSQL.TIMEOUT,
};
export default config;
