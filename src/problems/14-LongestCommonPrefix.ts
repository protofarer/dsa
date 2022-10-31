export default function longestCommonPrefix(strs: string[]): string {
  let prefix = "";
  while (true) {
    let letter = strs[0][prefix.length];
    for (let i = 1; i < strs.length; ++i) {
      if (strs[i][prefix.length] !== letter) {
        letter = "";
      };
    }
    if (!letter) break;
    prefix += letter;
  }
  return prefix;
}
