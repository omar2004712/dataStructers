// this function accepts two params the first is the sub string and the sceond is the main
// and checks if the sub is in the main

// first takes the length of the sub
// iterate over the characters inside the main until it reaches its length minus the length of the sub
// in each iteration it collects (sub length) characters after the index of that iteration
// once it ended it compares it to the sub string value
// if the are equal returns true otherwise keeps going
// once the loop is over the function returns false indicating that the sub is not in the main

function isSubsequence(sub, main) {
  if (sub.length > main.length) {
    return false;
  }

  for (let i = 0; i < main.length - sub.length; i++) {
    let temp = "";
    for (let j = 0; j < sub.length; j++) {
      temp += main[i + j];
    }
    if (temp === sub) {
      return true;
    }
  }

  return false;
}

module.exports = isSubsequence;
