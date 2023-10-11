const sort = require('./InsertionSort2.js');

it("test", () => {
	expect(sort([1])).toStrictEqual([1]);

	let a = [2,1];
	expect(sort(a)).toStrictEqual([1,2]);

	a = [5,10,3,2,-5];
	expect(sort(a)).toStrictEqual([-5,2,3,5,10]);

	a = [3, 2, 1];
  expect(sort(a)).toStrictEqual([1, 2, 3]);

	a = [1, 2, 3];
  expect(sort(a)).toStrictEqual([1, 2, 3]);

	a = [1, 2, -3];
  expect(sort(a)).toStrictEqual([-3, 1, 2]);

	a = [1, 1, 1];
  expect(sort(a)).toStrictEqual([1, 1, 1]);

	a = [12];
  expect(sort(a)).toStrictEqual([12]);

	a = [];
  expect(sort(a)).toBe(null);
})