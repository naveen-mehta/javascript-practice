function findThreeLargestNumbers(array) {
	let newArray = [];
	let i = 0;
      
	while (i < 3) { 	
		let max = array[0]
		for (let k = 1; k < array.length; k++) {
			if (max < array[k]) {
				max = array[k];
			}
		}
		newArray.unshift(max);
		let x = array.indexOf(max)
		array.splice(x, 1);
		i++;
	}
	return newArray;
}