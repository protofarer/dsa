// assume lowercase inputs

// Brute Force: didn't pass test with huge string inputs
// export default function allAnagramsInString(s: string, p:string): number[] {
//   let out: number[] = [];

//   for (let i = 0; i < s.length; ++i) {
//     if (p.includes(s[i])) {
//       let remaining = p;  // letters left for making anagram
//       for (let c = 0; c < p.length; ++c) {
//         if (remaining.includes(s[i + c])) {
//           remaining =  remaining.replace(s[i + c], "");
//         } else {
//           break;
//         }
//       }
//       if (remaining.length === 0 ) {
//         out.push(i);
//       }
//     }
//   }

//   return out;
// }

export default function allAnagramsInString(s: string, p:string): number[] {
  let pm = makeFrequencyMap(p);   // frequency map to compare against
  const windowLength = p.length;
  let mm = makeFrequencyMap(s.slice(0, windowLength));   // moving frequency map, aka sliding window
  let out: number[] = [];

  if (areMapsEqual(mm, pm)) {
    out.push(0);
  }
 
  for (let i = 1; i < s.length - p.length + 1; ++i) {
    const decrementThis = mm.get(s[i - 1]);
    mm.set(s[i - 1], decrementThis ? decrementThis - 1 : 0)

    const incrementThis = mm.get(s[i + windowLength - 1]);
    mm.set(s[i + windowLength - 1], incrementThis ? incrementThis + 1 : 1);

    if (areMapsEqual(mm, pm)) {
      out.push(i);
    }
  }

  return out;
}

function areMapsEqual(
  m1: Map<string, number>, m2: Map<string, number>
): boolean {
  for (let i = 0; i < 26; ++i) {
    const c = String.fromCharCode(97 + i);
    const m1val = m1.get(c) || 0;
    const m2val = m2.get(c) || 0;
    if (m1val !== m2val) {
      return false;
    }
  }
  return true;
}

function makeFrequencyMap(s: string): Map<string, number> {
  let m: Map<string, number> = new Map();
  for (let i = 0; i < s.length; ++i) {
    const count = m.get(s[i]);
    m.set(s[i], count ? count + 1 : 1);
  }
  return m;
}