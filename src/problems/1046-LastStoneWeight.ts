// Use a max heap, as it cheaply maintains a pointer to the maximum value. Smash
// max plus next node together, the operation will remove the 2 nodes and add a
// new one, which must heapify back into the tree.

// TODO use max heap

// Brutish JS sort approach
export default function lastStoneWeight(stones: number[]): number {
  while (stones.length > 1) {
    stones.sort((a, b) => a - b);
    const y = stones.pop() as number;
    const x = stones.pop() as number;
    const z = y - x;
    if (z) stones.push(z);
  }

  return stones[0] ? stones[0] : 0;
}
