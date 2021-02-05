export const measureAsync = async <T, G extends Array<unknown>>(fn: (...args: G) => Promise<T>, ...args: G): Promise<[T, number]> => {
    const startTime: number = new Date().getTime();

    const fnResult: T = await fn(...args);

    const endTime: number = new Date().getTime();

    const durationInMs: number = endTime - startTime;

    return [fnResult, durationInMs];
};

export const measureSync = <T, G extends Array<unknown>>(fn: (...args: G) => T, ...args: G): [T, number] => {
    const startTime: number = new Date().getTime();

    const fnResult: T = fn(...args);

    const endTime: number = new Date().getTime();

    const durationInMs: number = endTime - startTime;

    return [fnResult, durationInMs];
};
