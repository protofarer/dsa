export default function longestPalindrome(s: string): number {
  const hm = new Map();
  for (let i = 0; i < s.length; ++i) {
    const count = hm.get(s[i]);
    if (count) {
      hm.set(s[i], count + 1);
    } else {
      hm.set(s[i], 1);
    }
  }

  let length = 0;
  for (let count of hm.values()) {
    if (count % 2 === 0) {
      length += count;
    } else {
      if (length % 2 === 0) {
        length++;
      }
      length += count - 1;
    }
  }
  
  return length;

  // even counts give +count/2 to palindrome length
  // if any odd counts, only add +1 to palindrome
}