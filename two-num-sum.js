function twoNumberSum(array, targetSum) {
	let finalArr = [];
	let i, sum, j;
	for (i = 0; i < (array.length -1); i++) {
		for (j = i+1; j < (array.length); j++) 
			if (array[i] + array[j] === targetSum) {
					finalArr.push(array[i], array[j])
					break;
			}
	}
  return finalArr;
}

