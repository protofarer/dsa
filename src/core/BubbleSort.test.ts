import { main } from "./BubbleSort";

describe("bubble sort", () => {
  it("basic", () => {
    expect(main([])).toBe(null);
    expect(main([3, 2, 1])).toStrictEqual([1, 2, 3]);
    expect(main([4, 3, 2, 1])).toStrictEqual([1, 2, 3, 4]);
    expect(main([1, 2, 3])).toStrictEqual([1, 2, 3]);
    expect(main([99, 5, 4, 3, 2, 1, -1, -555])).toStrictEqual([
      -555, -1, 1, 2, 3, 4, 5, 99,
    ]);
  });
});
