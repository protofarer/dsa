import { Stack } from "./Stack";

it("stack", () => {
  const a = new Stack();

  // success: push
  a.push(1);
  expect(a.head?.value).toBe(1);
  expect(a.size()).toBe(1);

  // success: pop
  expect(a.pop()).toBe(1);

  // success: is empty
  expect(a.isEmpty()).toBe(true);

  a.push(2);

  // success: is not empty
  expect(a.isEmpty()).toBe(false);

  a.clear();

  // success: clear
  expect(a.size()).toBe(0);

  // success: peek empty stack
  expect(a.peek()).toBe(null);

  a.push(3);

  // success: peek
  expect(a.peek()).toBe(3);
})