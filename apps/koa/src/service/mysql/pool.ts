// src/server/mysql/pool.ts
import mysql from "mysql";
import mysqlConfing from "./mysqlConfig";

const pool = mysql.createPool(mysqlConfing);
export default pool;
