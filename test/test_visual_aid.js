var assert = require('assert'),
    _ = require("lodash"),
    aid = require("../visual-aid.js");

describe('when it hears', function () {
  ["unexplainable", "interesting", "cue soffe", "cue raf", "cue nathan", "cue pivotal"].forEach(function(thing) {
    it(thing + ", it returns a result", function () {
      assert(aid(thing).length > 0);
    });
  });

  it("cue hipster, it returns a moving picture of nate", function() {
    assert(aid("cue hipster").length > 0);
  });

  it("cue HIPSTER, it doesn't care about the all caps and returns an image", function() {
    assert(aid("cue HIPSTER").length > 0);
  });

  it("bobstinkt, it doesn't return a result", function () {
    assert.strictEqual(aid("bobstinkt"), undefined);
  });

  it("replies when things are fine", function () {
    assert(aid("Nah, this is fine").length > 0);
  });

  it("doesn't replies when fine is used in a word", function () {
    assert.strictEqual(aid("Nah, this is undefined"), undefined);
  });

  it("#also #thinks #hashtag #fine #is #fine", function () {
    assert(aid("Everything is #fine").length > 0);
  });
});
