import { Singleton } from "./singleton";

@Singleton
export class Counter {
  private counter = 0;

  constructor() {}

  addCount() {
    this.counter += 1;
  }

  get getCount(): number {
    return this.counter;
  }
}

describe("@Decorator - Singleton", () => {
  it("Should be able to return 1 on first class instance", () => {
    const counter = new Counter();

    counter.addCount();

    expect(counter.getCount).toBe(1);
  });

  it("Should be able to return 2 on second class instance", () => {
    const otherCounter = new Counter();

    otherCounter.addCount();

    expect(otherCounter.getCount).toBe(2);
  });
});
