export default function isSubsequence(s: string, t: string): boolean {
  let lastMatchIndex = -1;

  for (let i = 0; i < s.length; ++i) {
    // need to start indexOf from lastMatch + 1
    const matchIndex = t.indexOf(s[i], lastMatchIndex + 1);

    if (matchIndex === -1) return false;

    if (matchIndex > lastMatchIndex) lastMatchIndex = matchIndex;
  }

  return true;
}