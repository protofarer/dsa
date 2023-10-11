module.exports = function insertionsort(arr) {
	const n = arr.length;

	if (n == 0 ) return null;
	if (n == 1) return arr;

	for (let i = 1; i < n; i++) {
		for (let j = i; j > 0; j--) {
			if (arr[j] < arr[j - 1]) {
				const tmp = arr[j - 1];
				arr[j - 1] = arr[j];
				arr[j] = tmp;
			} else {
				break;
			}
		}
	}

	return arr;
}