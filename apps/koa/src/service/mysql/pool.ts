// src/server/mysql/pool.ts
import mysql from "mysql";
import mysqlConfing from "../../config/MySQL";

const pool = mysql.createPool(mysqlConfing);
export default pool;
