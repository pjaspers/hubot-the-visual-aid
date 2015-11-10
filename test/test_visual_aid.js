var assert = require('assert'),
    _ = require("lodash"),
    aid = require("../visual-aid.js");

describe('when it hears', function () {
  ["unexplainable", "interesting", "cue soffe", "cue raf"].forEach(function(thing) {
    it(thing + ", it returns a result", function () {
      assert(aid(thing).length > 0);
    });
  });

  it("bobstinkt, it doesn't return a result", function () {
    assert.strictEqual(aid("bobstinkt"), undefined);
  });
});
