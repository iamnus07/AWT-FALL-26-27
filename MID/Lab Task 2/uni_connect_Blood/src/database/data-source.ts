import "dotenv/config";
import { DataSource } from "typeorm";

export default new DataSource({
  type: "postgres",
  host: process.env.DB_HOST || "localhost",
  port: Number(process.env.DB_PORT || 5432),
  username: process.env.DB_USER || process.env.DB_USERNAME || "postgres",
  password: process.env.DB_PASSWORD || "9876",
  database: process.env.DB_DATABASE || process.env.DB_NAME || "user_management",
  entities: ["src/modules/**/entities/*.entity.ts"],
  migrations: ["src/database/migrations/*.ts"],
  synchronize: false,
});
