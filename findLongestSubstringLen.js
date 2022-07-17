// this function takes in a string and checks the length of the longest substring
// the substring must be with unique characters which means each character must occur
// only once or none

// The Algorithm
// set a start index to be zero
// iterate over indecies starting from one
// when iterating over each character add the character to an object
// this object is to save all the seen characters the values are the indices of the characters plus one
// if the char inside the seen object
// set the start value to be the index of the char inside the seen obj or the existing value of start which ever is higher
// in each iteration set the max to be either currIdx - start + 1 or max which ever is higher
// after finishing the iteration return max

function findLongestSubstringLen(str) {
  let max = 0;
  const seen = {};
  let start = 0;

  for (let i = 0; i < str.length; i++) {
    if (seen[str[i]]) {
      start = Math.max(seen[str[i]], start);
    }
    max = Math.max(max, i - start + 1);
    seen[str[i]] = i + 1;
  }
  return max;
}

module.exports = findLongestSubstringLen;
