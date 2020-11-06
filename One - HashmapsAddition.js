/*O(n) runtime*/
let hash = new Map();
var a = [9,7,10,15,2];
var k = 24;
for (var i in a) { 
	let temp = k-a[i];
	if (hash.has(temp)) {
		console.log("Sum of " + a[i] + " + " + temp)
	}
	hash.set(a[i]);
}

/*O(n^2) runtime*/
/*var a = [9,7,10,15,2];
var k = 24;

for (var i in a) { 
	for (var j in a) { 
		if (j + i == k) {
			console.log(j + i == k)
		}
	}
}
console.log(j + i == k)
*/
