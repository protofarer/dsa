// clues from leetcode: hashtable, trie
// TODO use a trie
// Brutish, use JS built-ins
export default function topKFrequentWords(words: string[], k: number): string[] {
  const hm: Map<string, number> = new Map();
  for (let word of words) {
    const count = hm.get(word) || 0;
    hm.set(word, count + 1);
  }

  let descFreq: string[] = [];
  for (let w of words) {
    if (!descFreq.includes(w))
      descFreq.push(w);
  }

  descFreq.sort((a, b) => {
    const d = (hm.get(b) as number) - (hm.get(a) as number);
    if (d === 0) {
      if (a < b) {
        return -1;
      }
      if (b > a) {
        return 1;
      }
      return 0
    }
    return d;
  });
  
  return descFreq.slice(0, k);
}
