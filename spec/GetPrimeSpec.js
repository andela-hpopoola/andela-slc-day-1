'use strict'

var app = require('../app/getprimes.js');

describe("Case for illogical input:", function() {

  describe("Case for invalid input", function() {

    it("should return `Invalid Input ` for `andela`", function() {
      expect(app.getPrimes('andela')).toBe('Invalid Input');
    });

    it("should return `Invalid Input ` for [0, 1, 2]", function() {
      expect(app.getPrimes([0, 1, 2])).toBe('Invalid Input');
    });

    it("should return `Invalid Input ` for 7.5", function() {
      expect(app.getPrimes(7.5)).toBe('Invalid Input');
    });

  });

  describe("Case for negative input value", function() {

    it("should return `[]` for -327", function() {
      expect(app.getPrimes(-327)).toEqual([]);
    });

    it("should return `[]` for -19", function() {
      expect(app.getPrimes(-19)).toEqual([]);
    });

  });

  describe("Case for zero as input", function() {

    it("should return undefined for 0", function() {
      expect(app.getPrimes(0)).toEqual([]);
    });

  });
  
});

describe("Should return prime numbers between zero and valid n", function() {

  it("should return empty array for 1", function() {
    expect(app.getPrimes(1)).toEqual([]);
  });

  it("should return [2, 3, 5] for 6", function() {
    expect(app.getPrimes(6)).toEqual([2, 3, 5]);
  });

  it("should return [2, 3, 5, 7] for 7", function() {
    expect(app.getPrimes(7)).toEqual([2, 3, 5, 7]);
  });
  
  it("should return [2, 3, 5, 7, 11, 13, 17, 19, 23, 29] for 30", function() {
    expect(app.getPrimes(30)).toEqual([2, 3, 5, 7, 11, 13, 17, 19, 23, 29]);
  });
  
});
