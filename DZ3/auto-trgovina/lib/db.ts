import { Pool } from "pg";

const conn = new Pool({
  user: process.env.PGSQL_USER,
  password: process.env.PGSQL_PASSWORD,
  host: process.env.PGSQL_HOST,
  port: (process.env.PGSQL_PORT || 5432) as number,
  database: process.env.PGSQL_DATABASE,
  ssl: process.env.SSL_ON == "true",
});

export default conn;
