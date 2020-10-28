'use strict';

// Complete this algo
const minJumps = arr => {
  let reach = arr[0]
  let current = arr[0]
  let layer = 1;
  for (let i =1; i < arr.length; i++){
      if (i === (arr.length-1)){
          return layer
      }
      reach = Math.max(reach, i + arr[i])
      current--;
      if(current === 0){
          layer++
          if (i >= reach){
              return -1
          }
          current = reach - i
      }

  }
  
  
  /*while(true) {
    let largestValIdx = currentValue + 1;
    for(let i = currentValue + 1; i < arr[currentValue]; i++) {
      if(arr[i] === arr[arr.length-1]) return layer;
      if(arr[i] > arr[largestValIdx]) largestValIdx = i;
    }
    layer++;
    currentValue = largestValIdx;
    console.log(currentValue, layer);
  }*/
};

module.exports = minJumps


/*const minJumps = arr => {
let reach = arr[0];
let step = arr[0];
let jump = 1
for (let i = 1; i < arr.length; i++){
    if (i === (arr.length-1)){
        return jump
    }
    console.log(reach, step)
    reach = Math.max(reach, i + arr[i]);
    step --;
    if (step == 0) {
        jump++
        step = reach - i
    }
}
};*/









/*
  6
/ | \
3 2 |1|   - First Level
*/

// Look at the first value (array[0]) - set to current value

// Loop through current value, create branch for each possibility

// If new tree node === array[array.length - 1] -> return # of jumps for that branch

// Else set currentvalue to each node in tree
