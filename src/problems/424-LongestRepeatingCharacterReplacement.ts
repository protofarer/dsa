export default function longestRepeatingCharacterReplacement(
  s: string, k: number
): number {
  // The minimum window size is k + 1, allowing for the replacement of k
  // characters to match a single character. This is the trivial case.
  
  // The window defaults to moving its end pointer.
  // Thus whole window "slides" (moves its start pointer) only when the
  // replacements are unable to meet the "repeating" condition, that is, when
  // the frequencies of characters other than the character with the max
  // frequency is beyond *k* replacements.

  // A hashmap represents the character frequency in the window at all times,
  //
  // The highest frequency char is just as significant as the chars with
  // frequencies less than the highest. This is a matter of which is easier to
  // compute and store. My initial approach uses the highest frequency char
  // along with the window length to determine if the "repeating" quality is
  // maintained by the window, aka the condition for sliding the whole window.
  //
  // In the loop, the window grows (end pointer increases) until it no longer
  // maintains its "all characters repeating" state. Thus the window will be of
  // a size 1 greater than the "longest repeating char replacement" length. As
  // such, the return statement decrements the window size.
  
  // init window
  let start = 0;
  let end = k + 1;

  // init window's character frequencies
  let freq: Map<string, number> = new Map();
  for (let i = 0; i < end; ++i) {
    const count = freq.get(s[i]) || 0;
    freq.set(s[i], count + 1);
  }

  // trivial case
  if (k + 1 >= s.length) {
    return s.length;
  }

  while (end <= s.length) {
    const maxFreq = getMaxFrequency(freq);

    // slide start
    if ((end - start) - maxFreq > k) {
      const countStartChar = freq.get(s[start]) as number;
      freq.set(s[start], countStartChar - 1);
      start++;
    }

    // slide end / grow
    const countEndChar = freq.get(s[end]) || 0;
    freq.set(s[end], countEndChar + 1);
    end++;
  }

  return end - start - 1;
}

// Slow for small input s (while s around 26 char long)
function getMaxFrequency(m: Map<string, number>): number {
  let max = 0;
  for (let i = 0; i < 26; ++i) {
    const count = m.get(String.fromCharCode(65 + i)) || 0;
    if (count > max) {
      max = count;
    }
  }

  return max;
}