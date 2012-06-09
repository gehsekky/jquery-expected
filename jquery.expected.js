// the semi-colon before function invocation is a safety net against concatenated 
// scripts and/or other plugins which may not be closed properly.
;(function ($, window, undefined) {
	$.fn.expected = function (expectedVal) {
		if (this.length !== expectedVal) {
			throw 'Array returned by selector did not have expected length of ' + expectedVal.toString();
		}
		return this;
	}
}(jQuery, window));