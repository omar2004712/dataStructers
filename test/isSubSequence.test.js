const assert = require("assert");
const isSubsequence = require("../isSubSequence");

it("isSubSequence test - sub is not inside main", () => {
  assert.strictEqual(isSubsequence("this", "hello world"), false);
});

it("isSubSequence test - sub is inside main", () => {
  assert.strictEqual(isSubsequence("hello", "hello world"), true);
});
