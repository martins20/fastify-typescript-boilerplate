import { FastifyInstance, FastifyPluginCallback } from "fastify";
// import fp from "fastify-plugin";

import { ApiServer } from "../infra/http/server";

function makeFastifyClient(): FastifyInstance {
  const api = new ApiServer().api;

  return api;
}

export function build() {
  const app = makeFastifyClient();

  beforeAll(async () => {
    void (await app.ready());
  });

  afterAll(() => app.close());

  return app;
}

export async function getFastifyInstanceWithDecorator<
  T extends FastifyPluginCallback
>(decorator: T): Promise<FastifyInstance> {
  const fastifyClient = makeFastifyClient();

  void fastifyClient.register(decorator);

  await fastifyClient.ready();

  return fastifyClient;
}
