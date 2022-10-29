export default function happyNumber(n: number): boolean {
  const seen: number[] = [];
  let result = n;
  let x: string = "";

  while (result !== 1 && !seen.includes(result)) {
    seen.push(result);
    x = result.toString();

    result = 0;
    for (let i = 0; i < x.length; ++i) {
      result += Number(x[i]) ** 2;
    }
  }

  return result === 1 ? true : false;
}
