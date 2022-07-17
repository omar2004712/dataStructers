// this functions accepts two params
// the first param is an array of numbers
// the second param is the type of addition
// first type (default): "values" which itterates over the array and sums the numbers inside it
// second type: "range" the array must be of two types lower and upper bounds
// the "range" will iterate over all the number between the bounds includeing the lower and excluding the upper

// the algorithm for "values" (Recursion)
// if the length of the array is zero return 0
// pop the last element and save it
// return the last element and call the function recursivley and pass the updated array (after poping the last element)

// the algroithm for "range"
// check if the lower bound is actually lower than the upper
// if not throw an error
// if only one bound was given set the lower to be zero
// iterate over the numbers between the bounds including the lower excluding the upper

function arrSum(arr, type = "values") {
  if (type === "values") {
    if (arr.length === 1) {
      return arr[0];
    }

    return arr.pop() + arrSum(arr, "values");
  } else if (type === "range") {
    if (arr.length === 1) {
      arr[1] = arr[0];
      arr[0] = 1;
    }

    if (arr.length !== 2) {
      throw new Error("Array length must be 2");
    } else if (arr[0] > arr[1]) {
      throw new Error("first value is greater than second value");
    }

    let sum = 0;
    for (let i = arr[0]; i <= arr[1]; i++) {
      sum += i;
    }
    return sum;
  } else {
    throw new Error("Invalid type");
  }
}
