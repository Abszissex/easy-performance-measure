import {measureAsync, measureSync} from './index';

describe(`Index`, () => {
    const syncTestFn = (a: number, b: number): string => `${a}:${b}`;

    const asyncTestFn = async (a: number, b: number): Promise<string> => `${a}:${b}`;

    describe(`Measure Sync`, () => {
        it(`Should return value of input Fn and measured time`, () => {
            const res: [string, number] = measureSync<string, [number, number]>(syncTestFn, 1, 2);
            expect(res[0]).toBe(syncTestFn(1, 2));
            expect(res[1]).toStrictEqual(expect.any(Number));
        });
    });

    describe(`Measure Async`, () => {
        it(`Should return value of input Fn and measured time`, async () => {
            const res: [string, number] = await measureAsync<string, [number, number]>(asyncTestFn, 1, 2);
            expect(res[0]).toBe(await asyncTestFn(1, 2));
            expect(res[1]).toStrictEqual(expect.any(Number));
        });
    });
});
