export const SINGLETON_KEY = Symbol("Singleton key");

export type Singleton<T extends new (...args: unknown[]) => unknown> = T & {
  [SINGLETON_KEY]: T extends new (...args: unknown[]) => infer I ? I : never;
};

export const Singleton = <T extends new (...args: unknown[]) => unknown>(
  type: T
) =>
  new Proxy(type, {
    construct(target: Singleton<T>, argsList, newTarget) {
      if (target.prototype !== newTarget.prototype) {
        return Reflect.construct(target, argsList, newTarget);
      }

      if (!target[SINGLETON_KEY]) {
        // eslint-disable-next-line no-param-reassign
        target[SINGLETON_KEY] = Reflect.construct(target, argsList, newTarget);
      }

      return target[SINGLETON_KEY];
    },
  });
