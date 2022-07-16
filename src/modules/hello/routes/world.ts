import { FastifyPluginAsync } from "fastify";
import { HelloWorldController } from "@modules/hello/controllers/hello-world";

export const helloWorldRoutes: FastifyPluginAsync = async (
  fastify,
  routeOptions
): Promise<void> => {
  fastify.get("/", routeOptions, new HelloWorldController().get);
};
