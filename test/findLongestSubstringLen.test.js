const assert = require("assert");
const findLongestSubstringLen = require("../findLongestSubstringLen");

it("findLongestSubstringLen test - passing normal string", () => {
  assert.strictEqual(findLongestSubstringLen("thisisawesome"), 6);
});

it("find longestSubstringLen test - passing empty string", () => {
  assert.strictEqual(findLongestSubstringLen(""), 0);
});
