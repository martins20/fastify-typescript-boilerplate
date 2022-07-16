import { HelloWorldService as Sut } from "./hello-world";

let sut: Sut;

describe("@SERVICE - hello world", () => {
  beforeEach(() => {
    sut = new Sut();
  });

  it("Should say hello world in response message", async () => {
    const response = await sut.execute();

    expect(response.message).toBe("Hello World");
  });
});
