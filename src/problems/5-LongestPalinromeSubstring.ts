// How can we reuse a previously computed palindrome to compute a larger
// palindrome?  

// If “aba” is a palindrome, is “xabax” a palindrome? Similarly is
// “xabay” a palindrome?  

// Complexity based hint: If we use brute-force and check
// whether for every start and end position a substring is a palindrome we have
// O(n^2) start - end pairs and O(n) palindromic checks. Can we reduce the time for
// palindromic checks to O(1) by reusing some previous computation.

// * https://leetcode.com/problems/longest-palindromic-substring/
// * I assumed to be doing sentences
// TODO rework loop to go middle-out
// TODO re-use previous substrings

function longestPalindrome(s: string): string | undefined {
  if (s.length === 1) return s;

  let start = 0;
  let end = 0;
  for(let i = 0; i < s.length; i++) {
    const lengthOdd = isPalindrome(s, i, i);
    const lengthEven = isPalindrome(s, i, i + 1);
    const longerLength = Math.max(lengthEven, lengthOdd);
    if (longerLength > end - start) {
      start = i - Math.floor((longerLength - 1)/ 2);
      end = i + Math.floor(longerLength / 2) + 1;
    }
  }
  return s.substring(start, end);
  
}

function isPalindrome(s: string, l: number, r: number): number {
  while (l >= 0 && r < s.length && s[l] === s[r]) {
    l--; r++;
  }
  return r - l - 1;
}

let s: string = "abacusabba"
// console.log(``, isPalindrome('kadak'))

console.log(longestPalindrome(s))