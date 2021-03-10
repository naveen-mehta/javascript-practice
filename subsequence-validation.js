function isValidSubsequence(array, sequence) {
	let sqIdx = 0;
	let arIdx = 0;
	while (sqIdx < sequence.length && arIdx < array.length) {
		if (sequence[sqIdx] === array[arIdx]) {
			sqIdx++;
			arIdx++;
		} else {
			arIdx++;
		}
				 
	}
	if (sqIdx === sequence.length) {
		return true;
	} else {
		return false;
	}
}
