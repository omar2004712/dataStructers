// This is a function that parses two string that contains integers
// and adds them up and return the result in the type of a string

// the algorithm is to go through each digit in the two string from the back
// the loop should run until it's done going through the longer number
// if a digit has a value of undefined then set its value to 0
// because this means that one of the numbers is longer than the other
// after parsing the digits and adding them up the result is checked
// if the result is higher than 9
// check if this is the last digit to check
// if so then add it the total string
// otherwise the value in the tens slot is taken and saved to the over9 and the
// later added to the digit in the next index

// the benefit of this function is in the case of adding two large numbers the value that
// return from the addition may become infinity which is not helpful

function add(num1 = "0", num2 = "0", ...nums) {
  let lastIndex = Math.max(num1.length, num2.length);
  let total = "";
  let over9 = 0;

  for (let i = 0; i < lastIndex; i++) {
    let digit1 = parseInt(num1[num1.length - i - 1] || 0);
    let digit2 = parseInt(num2[num2.length - i - 1] || 0);
    if (isNaN(digit1) || isNaN(digit2)) {
      console.log(digit1, digit2);
      throw new Error("invalid values");
    }
    let result = digit1 + digit2 + over9;
    if (result > 9) {
      if (i === lastIndex - 1) {
        total = String(result) + total;
      } else {
        const arrResult = String(result).split("");
        total = String(arrResult[arrResult.length - 1]) + total;
        arrResult.pop();
        over9 = parseInt(arrResult.join(""));
      }
    } else {
      total = String(result) + total;
      over9 = 0;
    }
  }
  for (let num of nums) {
    total = add(total, num);
  }

  return total;
}

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    throw new Error("arrays must have the same length");
  }
  for (let num of arr1) {
    if (typeof num !== "number") {
      throw new Error("all elements should be numbers");
    }
    let indexOfSquared = arr2.indexOf(num ** 2);
    if (indexOfSquared === -1) {
      return false;
    } else {
      arr2.splice(indexOfSquared, 1);
    }
  }
  return true;
}

module.exports = add;
