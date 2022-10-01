// Approaches

// A
// read s sequentially left to right
// every new letter encountered, map it to whatever is in t
// every already encountered letter, see if t's letter matches s's

// B
// alternatively
// map every first letter encounter to a "next integer" for both s & t
// "next integer"/integer-morphic collection implemented as an array
// create an isomorphicized string (e.g. s') using respective integer maps
// evaluate the isomorphicized strings s' & t' for equivalence

// NB: map both at once and break the read loop as soon as discrepancy found

// Chose approach B
export default function isIsomorphic(s: string, t: string): boolean {
  if (s.length !== t.length || s.length === 0 || t.length === 0) return false;

  // integer-morphic collections for respective strings
  const s0: string[] = [];
  const t0: string[] = [];

  for (let i = 0; i < s.length; ++i) {
    const si = s0.indexOf(s[i]);
    const ti = t0.indexOf(t[i]);

    // si & ti must match to be isomorphic
    if (si !== ti) return false;

    // store when new letter encountered
    if (si === -1) {
      s0.push(s[i]);
      t0.push(t[i]);
    }
  }

  return true;
}