( function (root, factory) {
    /* istanbul ignore next */
    if (typeof define === 'function') {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.Fairmath = factory();
    }
} (this, function () {
    'use strict';

    function isNum (n) {
        n = typeof n !== 'number' ? Number(n) : n;
        if (Number.isNaN(n)) {
            return 0;
        }
        return n;
    }

    function fm (n, val) {
        n = isNum(n);
        val = isNum(val);
        if (n < 0 || n > 100) {
            throw new TypeError("The value " + n + " is out of the 0-100 range required by fairmath calcullations.");
        }
        // the below ceil/floor rounding is based on the actual results of the ChoiceScript implementation
        if (val < 0) {
            val = val * -1;
            return Math.ceil(n - (n * (val / 100)));
        }
        if (val > 0) {
            return Math.floor(n + ((100 - n) * (val / 100)));
        }
        // val === 0
        return n;
    }

    return fm;

}));