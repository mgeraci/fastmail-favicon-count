/* eslint-disable */

export default function range(left, right, inclusive) {
	const r = [];
	const ascending = left < right;
	const end = !inclusive ? right : ascending ? right + 1 : right - 1;
	for (let i = left; ascending ? i < end : i > end; ascending ? i++ : i--) {
		r.push(i);
	}
	return r;
}
