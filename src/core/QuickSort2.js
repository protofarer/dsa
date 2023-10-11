module.exports = function QuickSort2(arr, lo, hi) {
	if (hi - lo > 0) {
		let p = partition(arr, lo, hi);
		console.log(`p`, p)
		console.log(`arr:`, arr)
		
		
		QuickSort2(arr, p + 1, hi);
		QuickSort2(arr, 0, p - 1)
	}
}

function partition(arr, lo, hi) {
	let p = hi;
	let firstHigh = lo;
	for (let i = lo; i < hi; i++) {
		if (arr[i] < arr[p]) {
			swap(arr, i, firstHigh);
			firstHigh++;
		}
	}

	swap(arr, firstHigh, p);
	return firstHigh;
}

function swap(arr, a, b) {
	let tmp = arr[a];
	arr[a] = arr[b];
	arr[b] = tmp;
}