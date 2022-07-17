const assert = require("assert");
const arrSum = require("../arrSum");

it("arrSum (values) test", () => {
  assert.strictEqual(arrSum([1, 2, 3, 4]), 10);
});

it("arrSum (range) test - passing two bounds correctly", () => {
  assert.strictEqual(arrSum([1, 5], "range"), 10);
});

it("arrSum (range) test - passing one bound", () => {
  assert.strictEqual(arrSum([5], "range"), 10);
});

it("arrSum (range) test - passing no bounds", () => {
  try {
    arrSum([], "range");
    throw new Error("Supposed to throw an error");
  } catch (err) {}
});

it("arrSum (range) test - passing two bounds incorrectly", () => {
  try {
    arrSum([5, 0], "range");
    throw new Error("Supposed to throw an error");
  } catch (err) {}
});
