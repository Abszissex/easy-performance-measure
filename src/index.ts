/**
 * Measures the time in milliseconds it takes for the passed in method to finish
 * @param {function} fn The method which should be measured
 * @param {Array<unknown>} args A dynamic amount of parameters which will be passed into 'fn'
 * @return {Promise<[unknown, number]>} A tuple where the first element is the response of the passed in method and the
 * second the time in milliseconds it took to complete
 */
export const measureAsync = async <T, G extends Array<unknown>>(fn: (...args: G) => Promise<T>, ...args: G): Promise<[T, number]> => {
    const startTime: number = new Date().getTime();

    const fnResult: T = await fn(...args);

    const endTime: number = new Date().getTime();

    const durationInMs: number = endTime - startTime;

    return [fnResult, durationInMs];
};

/**
 * Measures the time in milliseconds it takes for the passed in method to finish
 * @param {function} fn The method which should be measured
 * @param {Array<unknown>} args A dynamic amount of parameters which will be passed into 'fn'
 * @return {[unknown, number]} A tuple where the first element is the response of the passed in method and the
 * second the time in milliseconds it took to complete
 */
export const measureSync = <T, G extends Array<unknown>>(fn: (...args: G) => T, ...args: G): [T, number] => {
    const startTime: number = new Date().getTime();

    const fnResult: T = fn(...args);

    const endTime: number = new Date().getTime();

    const durationInMs: number = endTime - startTime;

    return [fnResult, durationInMs];
};
