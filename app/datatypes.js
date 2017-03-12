'use strict'

// datatypes function
var dataTypes = function(value){

	// use a switch case; if is messy
	switch (typeof value) {

		// value is a string; return string length
		case 'string':
			return value.length;

		// value is null or undefined; return `no value`
		case 'undefined':
			return 'no value';

		// true or false; return value
		case 'boolean':
			return value;

		// value is a number; return value in relation to 100
		case 'number':
			if (value < 100) {
				return 'less than 100';
			} else if (value > 100) {
				return 'more than 100';
			} else {
				return 'equal to 100';
			}


		// call the function; run the function with true args
		case 'function':
			return value(true);

		default:
			// array and null returns an object
			// use Array.isArray to test for Array
			if (Array.isArray(value)) {
				if (value.length >= 3) {
					return value[2];
				}
				// return undefined if it doesnt exist
				return; 
				
			} else { // value must null
				return  'no value';
			}

	}
}

// Test Value
// e.g I used var value - dataTypes to call this
// var value = null;
// console.log(typeof value);
// console.log(dataTypes(value));


module.exports = {
	dataTypes: dataTypes	
}