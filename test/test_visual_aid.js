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
});
