'use strict';

// Complete this algo
const binarySearch = (array, target) => {
	let upperBound = array.length
	let lowerBound = 0
	let midpoint = Math.ceil(upperBound/2)
	//console.log(array)
	while(true){
		if (!(midpoint === upperBound || midpoint === lowerBound) || (array[lowerBound] === target) || (array[upperBound] === target) || (array[midpoint] === target)){
		switch (true){
			case (target === array[midpoint] || target === array[upperBound] || target === array[lowerBound]):
				return true
			case target > array[midpoint]:
				//console.log('case1', upperBound, lowerBound, midpoint)
				if (upperBound > lowerBound){
				lowerBound = midpoint					
				midpoint = Math.ceil((lowerBound + upperBound)/2)
				} else {
					return false
				}
				break;
			case target < array[midpoint]:
				//console.log('case 2', upperBound, lowerBound, midpoint)
				if (upperBound > lowerBound){
			    upperBound = midpoint
				midpoint = Math.ceil((lowerBound + upperBound) /2)
			
				} else {
					return false
				}
				break;
			
				default:
					return false
			} } else {
				return false
			}
	}	

};
// [1 2 3 4 5 |7| 8 9 10 11 12 13] . length 12 target 6
/*
	EXTRA CREDIT:

	Can you augment the function above to run in constant O(1) space?
	This means, you cannot edit/copy the original array!
	How can we use other pieces of data, like pointers, to avoid slicing?

*/

module.exports = binarySearch