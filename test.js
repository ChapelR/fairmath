/* jshint esversion: 6, node: true, mocha: true */
const Fairmath = require('./fairmath.js');
const assert = require('assert');

describe('Fairmath()', function () {
    /*

        note: these values were found by running the operations in ChoiceScript 

        it's possible that ChoiceScript internally stores floats and only output is rounded however, 
        i managed to achieve fairly consistent results in my testing and have written this code to
        reflect those results to the extent possible. I did not copy any code from CS or even look at any
        of it's code to prevent any potential legal issues, so my code is based on my observations alone.

    */
    it('should handle positive values properly', function () {
        // tested against real ChoiceScript values
        assert.strictEqual(Fairmath(50, 10), 55);
        assert.strictEqual(Fairmath(55, 10), 59);
        assert.strictEqual(Fairmath(59, 10), 63);
        assert.strictEqual(Fairmath(63, 20), 70);
        assert.strictEqual(Fairmath(70, 40), 82);
        assert.strictEqual(Fairmath(82, 40), 89);
    });
    it('should handle negative values properly', function () {
        // tested against real ChoiceScript values
        assert.strictEqual(Fairmath(50, -10), 45);
        assert.strictEqual(Fairmath(45, -10), 41);
        assert.strictEqual(Fairmath(41, -10), 37);
        assert.strictEqual(Fairmath(37, -20), 30);
        assert.strictEqual(Fairmath(30, -40), 18);
        assert.strictEqual(Fairmath(18, -40), 11);
    });
    it('should not exceed 100', function () {
        // because of the way fairmath works, values over 100 (99, really) shouldn't be possible
        assert.ok(Fairmath(99, 20) <= 100);
        assert.ok(Fairmath(99, 50) <= 100);
        assert.ok(Fairmath(99, 80) <= 100);
    });
    it('should not go below 0', function () {
        // because of the way fairmath works, values below 0 (1, really) shouldn't be possible
        assert.ok(Fairmath(1, -20) >= 0);
        assert.ok(Fairmath(1, -50) >= 0);
        assert.ok(Fairmath(1, -80) >= 0);
    });
    it('should pass number through when value is 0', function () {
        assert.strictEqual(Fairmath(50, 0), 50);
    });
    it('should 0 out unexpected values', function () {
        // throwing may be wiser. we'll see
        assert.strictEqual(Fairmath(50, 'f'), 50);
        assert.strictEqual(Fairmath(50, ''), 50);
        assert.strictEqual(Fairmath(50, NaN), 50);
        assert.strictEqual(Fairmath(50, null), 50);
        assert.strictEqual(Fairmath(50, false), 50);
        // undefined should probably not throw if I change the others, though
        assert.strictEqual(Fairmath(50), 50);
    });
    it('should throw on bad ranges', function () {
        // these could merely clamp the values and return, but throwing seems more sensible
        assert.throws(() => Fairmath(101, 10));
        assert.throws(() => Fairmath(-1, 10));
    });
});