export default function subtractProductSumDigitsofInteger(n: number): number {
    const arr = n.toString().split("").map(x => Number(x));
    let sum = 0;
    let product = 1;
    for (let i = 0; i < arr.length; ++i) {
        sum += arr[i];
        product *= arr[i];
    }
    return product - sum;
    
    // functional approach is slower and heavier on memory
    // const sum = arr.reduce((prev, curr) => prev + curr);
    // const product = arr.reduce((a,b) => a * b);
}
