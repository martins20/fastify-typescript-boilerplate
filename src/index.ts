import { ApiServer } from "@shared/infra/http/server";

import "dotenv/config";

const apiServer = new ApiServer();

apiServer.api.listen({
  port: process.env.API_PORT,
});

export default apiServer;
