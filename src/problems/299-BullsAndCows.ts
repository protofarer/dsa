// my attempt
// export default function bullsAndCows(secret: string, guess: string): string {
//   let sm: Map<string, number> = new Map();
//   let bulls = 0;
//   let cows = 0;

//   // build frequency map of secret
//   for (let i = 0; i < secret.length; ++i) {
//     sm.set(secret[i], (sm.get(secret[i]) || 0) + 1); 
//   }

//   // count bulls, update map
//   for (let i = 0; i < secret.length; ++i) {
//     if (secret[i] === guess[i]) {
//       const count = sm.get(secret[i]) as number;
//       sm.set(secret[i], count - 1);
//       bulls++;
//     }
//   }

//   // count cows, must happen after bulls to prevent inflated cow count
//   for (let i = 0; i < secret.length; ++i) {
//     const count = sm.get(guess[i]) || 0;
//     if (count && secret[i] !== guess[i]) {
//       sm.set(guess[i], count - 1);
//       cows++;
//     }
//   }

//   return `${bulls}A${cows}B`;
// }


// clever one array one pass solution per ruben3
export default function bullsAndCows(secret: string, guess: string): string {
  let bulls = 0;
  let cows = 0;
  let tally: number[] = new Array(10).fill(0);

  for (let i = 0; i < secret.length; ++i) {
    if (secret[i] === guess[i]) {
      bulls++;
    } else {
      if (tally[Number(secret[i])] < 0) cows++;
      if (tally[Number(guess[i])] > 0) cows++;
      tally[Number(secret[i])]++;
      tally[Number(guess[i])]--;
    }
  }

  return `${bulls}A${cows}B`;
}