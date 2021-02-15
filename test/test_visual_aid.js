const assert = require('assert');
const _ = require("lodash");
const { findUrlFor, available, availableExamples, regexToRuleThemAll } = require("../visual-aid.js");

describe('findUrlFor', function () {
  available().forEach(({example, regexes, urls}) => {
    it(`returns something for '${example}'`, () => (
      assert(findUrlFor(example).length > 0)
    ));
  });

  it("bobstinkt, it doesn't return a result", function () {
    assert.strictEqual(findUrlFor("bobstinkt"), undefined);
  });

  it("doesn't replies when fine is used in a word", function () {
    assert.strictEqual(findUrlFor("Nah, this is undefined"), undefined);
  });

  it("doesn't replies when fine is used in a word", function () {
    assert.strictEqual(findUrlFor("ik ken alleen morfine uit ervaring"), undefined);
  });

  it("#also #thinks #hashtag #fine #is #fine", function () {
    assert(findUrlFor("Everything is #fine").length > 0);
  });
});

describe("regexToRuleThemAll", () => {
  available().forEach(({example}) => {
    it(`matches '${example}'`, () => {
      const regex = regexToRuleThemAll();
      assert(regex.test(example));
    });
  });
})

describe("availableExamples", () => {

  it("returns a bunch of examples", () => {
    assert(availableExamples().length > 0)
  })

  it("contains at least fine", () => {
    assert(availableExamples().includes("this is fine"));
  })
})
