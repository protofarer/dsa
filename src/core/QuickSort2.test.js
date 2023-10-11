const sort = require('./QuickSort2.js');

it("test", () => {
	let a = [1];
	sort(a, 0, a.length - 1);
	expect(a).toStrictEqual([1]);

	a = [];
	sort(a, 0, a.length - 1);
	expect(a).toStrictEqual([]);
	
	a = [1,2,3];
	sort(a, 0, a.length - 1);
	expect(a).toStrictEqual([1,2,3]);

	a = [3,1,2];
	sort(a, 0, a.length - 1);
	expect(a).toStrictEqual([1,2,3]);

	a = [3, 2, 1];
	sort(a, 0, a.length - 1);
	expect(a).toStrictEqual([1,2,3]);

	a = [3, 3, 3];
	sort(a, 0, a.length - 1);
	expect(a).toStrictEqual([3,3,3]);
})