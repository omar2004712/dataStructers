const assert = require("assert");
const binarySearch = require("../binarySearch");

it("binarySearch test - passing an array the includes the wanted val", () => {
  assert.strictEqual(binarySearch([1, 2, 3, 4, 55], 4), 3);
});

it("binarySearch test - passing an array the does no include the wanted val", () => {
  assert.strictEqual(binarySearch([1, 2, 3, 4, 55], 5), -1);
});
