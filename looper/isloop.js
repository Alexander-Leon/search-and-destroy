'use strict';

//Complete this algo
const isLoop = (linkedlist) => {
  let cacheArray = [];
  let currentNode = linkedlist.head;
  while(currentNode.next) {
    if(cacheArray.includes(currentNode.value)) return true;
    cacheArray.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return false;
};

const findLoop = (linkedlist) => {
  let cacheArray = [];
  let currentNode = linkedlist.head;
  while(currentNode.next) {
    if(cacheArray.includes(currentNode.value)) return currentNode;
    cacheArray.push(currentNode.value);
    currentNode = currentNode.next;
  }
  return false;
};

// Loop over nodes
// Create cache of values
// If we reach the same value twice, break out of loop + return false
// else return true

/*
EXTRA CREDIT:

Write a function findLoop() that consumes a linkedlist with a loop
This function should return the Node value the loop begins at
Remember to write some test specs too!

*/
module.exports = {
  isLoop,
  findLoop
}
