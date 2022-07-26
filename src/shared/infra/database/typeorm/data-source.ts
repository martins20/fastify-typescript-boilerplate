import "reflect-metadata";
import "dotenv/config";

import { join } from "path";
import { DataSource } from "typeorm";
import { Test1658862383607 } from "./migrations/1658862383607-Test";

import { TypeormHelloEntity } from "@modules/hello/infra/typeorm/entities/hello";

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
    `${join(__dirname, "..")}/modules/**/infra/typeorm/entities/*.{.js,.ts}`,
    TypeormHelloEntity,
  ],
  migrations: ["./migrations/*.{.js,.ts}", Test1658862383607],
  subscribers: [],
  extra: {
    cli: {},
  },
});
