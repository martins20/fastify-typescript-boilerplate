import { FastifyInstance } from "fastify";

import { helloRoutes } from "@modules/hello/infra/http/routes";

export const registerRoutes = (app: FastifyInstance) => {
  app.register(helloRoutes, { prefix: "hello" });
};
