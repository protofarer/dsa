// export default function fizzBuzz(n: number): string[] {
//   let s: string[] = [];
//   for (let i = 1; i <= n; ++i) {
//     let sub = "";
//     if (i % 3 !== 0 && i % 5 !== 0) {
//       sub = i.toString();
//     } else {
//       if (i % 3 === 0 ) {
//         sub += "Fizz";
//       }
//       if (i % 5 === 0) {
//         sub += "Buzz";
//       }
//     }
//     s.push(sub);
//   }
//   return s;
// }

export default function haxBuzz(n: number): string[] {
  return new Array(n).fill(0).map((_, i) => {
    if ((i + 1) % 15 === 0) return "FizzBuzz";
    if ((i + 1) % 3 === 0) return "Fizz";
    if ((i + 1) % 5 === 0) return "Buzz";
    return `${i + 1}`;
  })
}