import { FastifyReply, FastifyRequest } from "fastify";

import { Singleton } from "@shared/decorators/singleton";

import { HelloWorldService } from "@modules/hello/services/hello-world";

@Singleton
export class HelloWorldController {
  get(_: FastifyRequest, __: FastifyReply) {
    const response = new HelloWorldService().execute();

    return response;
  }
}
