// this function takes in a <sorted> array and an avg
// and checks if there is a pair that has the same avg

// Algroithm (multiple pointers pattern)
// create two pointers
// the first points to the begining of the array and the second points to the end
// get the average of the values
// if equal return true
// if the pair average is greater reduce the upper pointer
// else increase the lower pointer
// keep going until the lower and upper pointer equal
// once the loop is over return false;

function averagePair(sortedArr, pairAvg) {
  function average(...nums) {
    let sum = 0;
    for (let num of nums) {
      sum += num;
    }

    return sum / nums.length;
  }

  let i = 0;
  let j = sortedArr.length;

  while (i !== j) {
    let avg = average(sortedArr[i], sortedArr[j]);
    if (avg === pairAvg) {
      return true;
    } else if (avg < pairAvg) {
      i++;
    } else {
      j--;
    }
  }

  return false;
}

module.exports = averagePair;
