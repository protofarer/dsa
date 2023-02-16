import { Queue } from "./Queue";

it("queue", () => {
  const a = new Queue();

  // inits correctly
  expect(a.size()).toBe(0);
  expect(a.isEmpty()).toBe(true);
  expect(a.peek()).toBe(null);

  // success: null if empty
  expect(a.dequeue()).toBe(null);

  a.enqueue(314);

  // success: has one item
  expect(a.size()).toBe(1);
  expect(a.isEmpty()).toBe(false);
  expect(a.peek()).toBe(314);

  // success: dequeue an item
  expect(a.dequeue()).toBe(314);
  expect(a.size()).toBe(0);
  expect(a.isEmpty()).toBe(true);
  expect(a.peek()).toBe(null);

  a.enqueue(828);
  a.enqueue(456);
  a.enqueue(0);

  // successes
  expect(a.size()).toBe(3);
  expect(a.isEmpty()).toBe(false);
  expect(a.peek()).toBe(828);

  expect(a.dequeue()).toBe(828);

  expect(a.size()).toBe(2);
  expect(a.isEmpty()).toBe(false);
  expect(a.peek()).toBe(456);
});
