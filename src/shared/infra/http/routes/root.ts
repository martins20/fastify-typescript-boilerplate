import { FastifyInstance } from "fastify";

import { helloRoutes } from "@modules/hello/routes";

export const registerRoutes = (app: FastifyInstance) => {
  app.register(helloRoutes, { prefix: "hello" });
};
