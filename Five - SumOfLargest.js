let a = [7,8,11,4,12,6,5,9,21,19,4,2,9,9,3]
let temp = 0;

for (let i = 0; i < a.length; i += 3) {

	if (a[i] > a[i+1]) {

		temp = temp + a[i]
		console.log("Added: " + a[i])

	} 
	else if (a[i+1] > a[i+2]) {

		temp = temp + a[i+1]
		console.log("Added: " + a[i+1])

	} 
	else if (a[i+2] > a[i]) {

		temp = temp + a[i+2]
		console.log("Added: " + a[i+2])
	}

	console.log("CurrentTemp: " + temp)
}

console.log("FinalSum: " + temp)