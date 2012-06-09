// the semi-colon before function invocation is a safety net against concatenated 
// scripts and/or other plugins which may not be closed properly.
;(function ($, window, undefined) {
	$.fn.expected = function (expectedVal) {
		// if expectedVal is a string, try parsing number
		if (typeof (expectedVal) === 'string') {
			expectedVal = parseInt(expectedVal);
		}
		if (!isNumber(expectedVal)) {
			throw new ExpectedValueError('Expected value is not a valid number');
		}
		
		// check if length matches expected value
		if (this.length !== expectedVal) {
			throw new ExpectedValueError('Array returned by selector did not have expected length of ' + expectedVal.toString());
		}
		
		// return original selector array
		return this;
	}
	
	// internal function used to check if n is a number
	function isNumber(n) {
		return !isNaN(parseFloat(n)) && isFinite(n);
	}
	
}(jQuery, window));

// custom error object used by plugin
function ExpectedValueError(msg) {
	this.name = 'ExpectedValueError';
	this.message = msg || '';
}
ExpectedValueError.prototype = new Error();