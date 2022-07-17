const assert = require("assert");
const averagePair = require("../averagePair");

it("averagePair test - passing an array that includes the average pair", () => {
  assert.strictEqual(averagePair([1, 4, 6, 8, 11], 7.5), true);
});

it("averagePair test - passing an array the does not include the average pair", () => {
  assert.strictEqual(averagePair([1, 6, 8, 11], 7.5), false);
});
