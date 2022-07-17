// this function accepts two params a sortedArr and val
// then searches for the val's index using binary search
// ===================================
// ******THE ARRAY MUST BE SORTED*****
// ===================================

// Algorithm (Divide an Conquer)
//set a lower bound equal to zero and an upper bound equal to the length of the array minus 1
// first takes calculates an approximation for the middle index of the array
// checks if the value in that index is equal to the wanted value
// if true return the middle index
// otherwise checks if the middle value is greater than the wanted value
// if true then reassign the upper bound to be the middle minus 1
// else set the lower bound to be the middle plus 1
// keep going until the lower bound is greater than the lower bound
// if the loop ends then return -1

function binarySearch(sortedArr, val) {
  let upperBound = sortedArr.length - 1;
  let lowerBound = 0;
  while (upperBound > lowerBound) {
    let middle = Math.floor((upperBound + lowerBound) / 2);
    if (sortedArr[middle] === val) {
      return middle;
    } else if (sortedArr[middle] > val) {
      upperBound = middle - 1;
    } else {
      lowerBound = middle + 1;
    }
  }

  // if no indicies were returned return -1
  return -1;
}

module.exports = binarySearch;
