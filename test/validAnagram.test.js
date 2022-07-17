const assert = require("assert");
const validAnagram = require("../validAnagram");

it("validAnagram test - not anagrams", () => {
  assert.strictEqual(validAnagram("hello", "world"), false);
});

it("validAnagram test - anagrams", () => {
  assert.strictEqual(validAnagram("racecar", "carrace"), true);
});
