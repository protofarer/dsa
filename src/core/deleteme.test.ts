import foo from './deleteme'

it("deleteme", () => {
	const a = foo();
  expect(a).toBe(1);
})