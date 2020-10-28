'use strict';

// Complete this algo
const minJumps = arr => {
  let currentValue = 0;
  let layer = 1;
  while(true) {
    let largestValIdx = currentValue + 1;
    for(let i = currentValue + 1; i < arr[currentValue]; i++) {
      if(arr[i] === arr[arr.length]) return layer;
      if(arr[i] > arr[largestValIdx]) largestValIdx = i;
    }
    layer++;
    currentValue = largestValIdx;
    console.log(currentValue, layer);
  }
};

module.exports = minJumps


/*
  6
/ | \
3 2 |1|   - First Level
*/

// Look at the first value (array[0]) - set to current value

// Loop through current value, create branch for each possibility

// If new tree node === array[array.length - 1] -> return # of jumps for that branch

// Else set currentvalue to each node in tree
