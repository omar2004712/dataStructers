const assert = require("assert");

const add = require("../stringifiedAddition");

it("a test for the add function - single digits", () => {
  assert.strictEqual(add("3", "5"), "8");
});

it("a test for the add function - single and double digits", () => {
  assert.strictEqual(add("3", "10"), "13");
});

it("a test for the add function - two double digits", () => {
  assert.strictEqual(add("13", "10"), "23");
});

it("a test for the add function - three numbers", () => {
  assert.strictEqual(add("13", "3", "10"), "26");
});
