import { build } from "@shared/test/helper";

describe("@CONTROLLER - hello world", () => {
  const app = build();

  it("/GET - Should return hello", async () => {
    const res = await app.inject({
      url: "/hello-world",
    });
    expect(res.json()).toEqual({ message: "Hello World" });
  });
});
