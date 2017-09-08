var assert = require("assert");

const TriCount = require("../src/TriCount");

describe("TriCount", function() {
  describe("#count()", function() {
    it("should satisfy example 1", function() {
      const tricount = new TriCount();
      assert.equal(3, tricount.count(1, 2));
    });

    it("should satisfy example 2", function() {
      const tricount = new TriCount();
      assert.equal(4, tricount.count(9, 10));
    });

    it("should satisfy example 3", function() {
      const tricount = new TriCount();
      assert.equal(-1, tricount.count(1, 1000000));
    });

    it("should satisfy example 4", function() {
      const tricount = new TriCount();
      assert.equal(83540657, tricount.count(19, 1000));
    });
  });
});
