import { ApiServer } from "@shared/infra/http/server";
import { AppDataSource } from "@shared/infra/database/typeorm/data-source";

import "dotenv/config";

const apiServer = new ApiServer();

const startServer = async () => {
  await AppDataSource.initialize();

  apiServer.api.listen({
    port: Number(process.env.API_PORT),
  });
};

startServer();
