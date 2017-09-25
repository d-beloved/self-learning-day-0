
  const assert = require('chai').assert;
	const aritGeo = require('../src/aritGeo.js');

	describe("aritGeo", function() {

  describe("Determine what the sequence an array of numbers is: ", function() {

    describe("Check if the argument is an array", function() {

      it("should return Invalid input for a non array", function() {
        assert.equal(aritGeo("Any other thing"), "Invalid Input");
      });

    });

    describe("Case for an empty array", function() {

      it("should return 0 for an empty array", function() {
        assert.equal(aritGeo([]), 0);
      });

    });

    describe("Case for an arithmetic sequence", function() {

      it("should return `Arithmetic` for [2, 4, 6, 8, 10]", function() {
        assert.equal(aritGeo([2, 4, 6, 8, 10]), 'Arithmetic');
      });

      it("should return `Arithmetic` for [5, 11, 17, 23, 29, 35, 41]", function() {
        assert.equal(aritGeo([5, 11, 17, 23, 29, 35, 41]), 'Arithmetic');
      });

      it("should return `Arithmetic` for [15, 10, 5, 0, -5, -10]", function() {
        assert.equal(aritGeo([15, 10, 5, 0, -5, -10]), 'Arithmetic');
      });

    });

    describe("Case for a geometric sequence", function() {

      it("should return `Geometric` for [2, 6, 18, 54, 162]", function() {
        assert.equal(aritGeo([2, 6, 18, 54, 162]), 'Geometric');
      });

      it("should return `Geometric` for [0.5, 3.5, 24.5, 171.5]", function() {
        assert.equal(aritGeo([0.5, 3.5, 24.5, 171.5]), 'Geometric');
      });

      it("should return `Geometric` for [−128, 64, −32, 16, −8]", function() {
        assert.equal(aritGeo([-128, 64, -32, 16, -8]), 'Geometric');
      });

    });

    describe("Case for neither arithmetic nor geometric sequence", function() {

      it("should return -1 for [34,56,12,9,10,11]", function() {
        assert.equal(aritGeo([34,56,12,9,10,11]), -1);
      });

      it("should return -1 for [1, 2, 3, 4, 5, 6, 6, 8]", function() {
        assert.equal(aritGeo([1, 2, 3, 4, 5, 6, 6, 8]), -1);
      });

      it("should return -1 for [23,1,5,10,20]", function() {
        assert.equal(aritGeo([23,1,5,10,20]), -1);
      });
      
    });
  });

})