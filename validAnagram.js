// this function accepts two strings and check if the strings are anagrams or not

// the Algorithm (frequency counter)
// itereate over the first string and adds the characters as keys to an object
// the values of the characters will a count for the occurrences
// iterate over the characters in the second string and if the character is not in
// the frequencyCounter object or has a value of zero return false
// otherwise decrement the value by one
// after iterating over the characters check if the values remaining in the object are higher than 0

function validAnagram(str1, str2) {
  // if the strings does not have the same length they are not anagrams
  if (str1.length !== str2.length) {
    return false;
  }

  const frequencyCounter1 = {};

  for (let val of str1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }

  for (let val of str2) {
    if (!frequencyCounter1[val]) {
      return false;
    }

    frequencyCounter1[val]--;
  }

  for (let key in frequencyCounter1) {
    // checks if there are any remainings
    if (frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

module.exports = validAnagram;
