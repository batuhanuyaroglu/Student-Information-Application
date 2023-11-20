import { User, Student } from "../entities";
import { DataSource } from "typeorm";
import * as dotenv from "dotenv";
import "dotenv/config";
dotenv.config({ path: process.cwd() + "/.env" });

export const AppDataSource: DataSource = new DataSource({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User, Student],
  synchronize: true,
  logging: true,
});
