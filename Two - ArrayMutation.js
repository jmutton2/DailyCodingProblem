/*O(n^2) runtime*/
var a = [1,2,1,4,5];
var b = [];

for (var i in a) {
	let pushed = 1;
	for (var j in a) {
		if (j != i) {
			pushed = pushed*a[j];
		}
	}
	b.push(pushed);
}
console.log(b);