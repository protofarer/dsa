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
  let palindromes: string[] = [];

  for(let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
        const substr = s.substring(i, j);
        isPalindrome(substr) && palindromes.push(substr);
      }
    }
  
  if (palindromes.length > 0) {
    const largest = palindromes.reduce((prev, curr) => (
      curr.length > prev.length
        ? curr
        : prev
    ))
    return largest;
  }
  return;
}

function isPalindrome(s: string): boolean {
  if (s.length === 1) return true;

  for(let i = 0; i < Math.floor(s.length / 2); i++) {
    if (s[i] !== s[s.length - 1 - i]) {
      return false;
    }
  }
  return true;
}

let s: string = "a"
// console.log(``, isPalindrome('kadak'))

console.log(longestPalindrome(s))