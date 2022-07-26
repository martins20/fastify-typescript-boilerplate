import { FastifyPluginAsync } from "fastify";
import { helloWorldRoutes } from "./world";

export const helloRoutes: FastifyPluginAsync = async (
  fastify,
  routeOptions
): Promise<void> => {
  fastify.register(helloWorldRoutes, { prefix: "world" });
};
