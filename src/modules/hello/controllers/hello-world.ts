import { FastifyReply, FastifyRequest } from "fastify";

import { Singleton } from "@shared/decorators/singleton";
import { HelloWorldService } from "@modules/hello/services/hello-world";

@Singleton
export class HelloWorldController {
  get(request: FastifyRequest, reply: FastifyReply) {
    const response = new HelloWorldService().execute();

    return response;
  }
}
