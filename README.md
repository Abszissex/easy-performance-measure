# easy-performance-measure

## How to use

```typescript
import {measureSync, measureAsync} from 'easy-performance-measure';

const syncFn = (a:string, b:number) :string=> `${a}: ${b}`;
const asyncFn = async (a:string, b:number): Promise<string> => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(result(a, b));
        }, 250);
    });
};

const main = async (): Promise<void>=>{
    // Example for synchronous method
    const resultSync: [string, number] = measureSync<string, [string, number]>(syncFn, 'First', 5);
    console.log(resultSync); // Output: [ 'First: 5', 0 ]

    // Example for asynchronous method
    const resultAsync: [string, number] = await measureAsync<string, [string, number]>(asyncFn, 'First', 5);
    console.log(resultAsync); // Output: [ 'First: 5', 255 ]
};

main();




```