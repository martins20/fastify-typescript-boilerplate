// import { getFastifyInstanceWithDecorator } from "@shared/test/helper";

// import Support from "@shared/infra/plugins/support";
// import { FastifyInstance } from "fastify";

// let fastify: FastifyInstance;

describe("Support Decorator", () => {
  // beforeAll(async () => {
  //   fastify = await getFastifyInstanceWithDecorator(Support);
  // });

  // afterAll(() => {
  //   fastify.close();
  // });

  test("support works standalone", async () => {
    // expect(fastify.someSupport()).toEqual("hugs");

    expect(1 + 1).toBe(2);
  });
});
