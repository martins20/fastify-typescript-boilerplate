import "reflect-metadata";
import "dotenv/config";

import { join } from "path";
import { DataSource } from "typeorm";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: Number(process.env.DATABASE_PORT),
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  synchronize: true,
  logging: false,
  migrationsRun: true,
  entities: [
    `${join(
      __dirname,
      "..",
      "..",
      "..",
      ".."
    )}/modules/**/infra/typeorm/entities/*{.js,.ts}`,
  ],
  migrations: [`${join(__dirname)}/migrations/*{.ts,.js}`],
  subscribers: [],
});
