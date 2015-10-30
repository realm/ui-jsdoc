/**
 * Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
 * tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
 *
 * @summary Short summary
 *
 * @class
 * @extends Parent
 */
var Child = function () {
    /**
     * Property test
     * @type {String}
     */
    this.test = 'test'
};

Child.prototype = /** @lends Child */{
    /**
     * cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidata
     *
     * @summary test summary
     * @property {Boolean}
     */
    testPropertyInChild: '',

    /**
     * cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
     */
    testMethodInChild: function (paramUnNotation) {
        return {};
    },

    /**
     * proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
     * @return {Object} result
     * @return {String} [result.property]
     * @return {Number} result.property2=123 cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
     */
    returnObject: function () {
    }
};