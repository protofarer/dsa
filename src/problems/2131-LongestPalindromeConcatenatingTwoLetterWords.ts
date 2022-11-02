// https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/?envType=study-plan&id=level-2
// TODO handle where a particular symm word count > 2
// TODO handle asymm word pal count > 2
export default function longestPalindromeConcatenatingTwoLetterWords(
  words: string[]
): number {
  // A pair is either A) an asymm with corresponding reversal B) two symms
  let unpaired = new Map<string, number>();  // tracks unpaired words only
  let length = 0;
  let loneSymmCount = 0;

  for (let i = 0; i < words.length; ++i) {

    // symmetric words handled differently than asymmetrics
    if (words[i][0] === words[i][1]) {
      const count = unpaired.get(words[i]) || 0;

      // a pair of symms prefers to be used as palindrome pair rather than a single center word
      if (count === 1) {
        length += 4;
        unpaired.set(words[i], 0);
        loneSymmCount--;

      // lone symms can be used as the center of a palindrome
      } else {
        unpaired.set(words[i], 1);
        loneSymmCount++;
      }

    // asymms add to length only when their reversal is found
    } else {
      const reversal = `${words[i][1]}${words[i][0]}`;
      const reversalCount = unpaired.get(reversal) || 0;
      if (reversalCount >= 1) {
        unpaired.set(reversal, reversalCount - 1);
        length += 4;
      } else {
        const count = unpaired.get(words[i]) || 0;
        unpaired.set(words[i], count + 1);
      }
    }
  }

  length += loneSymmCount > 0 ? 2 : 0;
  return length ;
}