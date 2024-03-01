/**
* @license Apache-2.0
*
* Copyright (c) 2020 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
var isPositiveInteger = require( '@stdlib/assert-is-positive-integer' );
var isInteger = require( '@stdlib/assert-is-integer' ).isPrimitive;
var isFunctionArray = require( '@stdlib/assert-is-function-array' );
var isFunction = require( '@stdlib/assert-is-function' );
var isCollection = require( '@stdlib/assert-is-collection' );
var format = require( '@stdlib/error-tools-fmtprodmsg' );
var abs = require( '@stdlib/math-base-special-abs' );
var indexOfTypes = require( './index_of_types.js' );


// MAIN //

/**
* Returns a strided array function interface which performs multiple dispatch.
*
* @param {(FunctionArray|Function)} fcns - list of strided array functions
* @param {Collection} types - one-dimensional list of strided array argument data types
* @param {(Collection|null)} data - strided array function data (e.g., callbacks)
* @param {PositiveInteger} nargs - total number of strided array function interface arguments (including data types, strides, and offsets)
* @param {NonNegativeInteger} nin - number of input strided arrays
* @param {NonNegativeInteger} nout - number of output strided arrays
* @throws {TypeError} first argument must be either a function or an array of functions
* @throws {TypeError} second argument must be an an array-like object
* @throws {TypeError} third argument must be an array-like object or `null`
* @throws {Error} third and first arguments must have the same number of elements
* @throws {TypeError} fourth argument must be a positive integer
* @throws {TypeError} fifth argument must be a nonnegative integer
* @throws {TypeError} sixth argument must be a nonnegative integer
* @throws {Error} fourth argument must be compatible with the specified number of input and output arrays
* @throws {Error} number of types must match the number of functions times the total number of array arguments for each function
* @throws {Error} interface must accept at least one strided input and/or output array
* @returns {Function} strided array function interface
*
* @example
* var unary = require( '@stdlib/strided-base-unary' );
* var abs = require( '@stdlib/math-base-special-abs' );
* var Float64Array = require( '@stdlib/array-float64' );
*
* var types = [
*     'float64', 'float64'
* ];
*
* var data = [
*     abs
* ];
*
* var strided = dispatch( unary, types, data, 7, 1, 1 );
*
* // ...
*
* var x = new Float64Array( [ -1.0, -2.0, -3.0, -4.0, -5.0 ] );
* var y = new Float64Array( [ 0.0, 0.0, 0.0, 0.0, 0.0 ] );
*
* strided( x.length, 'float64', x, 1, 'float64', y, 1 );
* // y => <Float64Array>[ 1.0, 2.0, 3.0, 4.0, 5.0 ]
*/
function dispatch( fcns, types, data, nargs, nin, nout ) {
	var strideArgs;
	var hasOffsets;
	var narrays;
	var nfcns;
	var iout;
	var fcn;

	if ( isFunction( fcns ) ) {
		fcn = fcns;
	} else if ( !isFunctionArray( fcns ) ) {
		throw new TypeError( format( '1Nn5d', fcns ) );
	}
	if ( !isCollection( types ) ) {
		throw new TypeError( format( '1Nn2y', types ) );
	}
	if ( !isCollection( data ) && data !== null ) {
		throw new TypeError( format( '1Nn5e', data ) );
	}
	if ( !isPositiveInteger( nargs ) ) {
		throw new TypeError( format( '1Nn5f', nargs ) );
	}
	if ( !isNonNegativeInteger( nin ) ) {
		throw new TypeError( format( '1Nn5X', nin ) );
	}
	if ( !isNonNegativeInteger( nout ) ) {
		throw new TypeError( format( '1Nn5g', nout ) );
	}
	narrays = nin + nout;
	if ( narrays === 0 ) {
		throw new Error( format('1Nn1M') );
	}
	if ( fcn ) {
		nfcns = types.length / narrays;
		if ( !isInteger( nfcns ) ) {
			throw new Error( format('1Nn1N') );
		}
	} else {
		nfcns = fcns.length;
		if ( types.length !== nfcns*narrays ) {
			throw new Error( format('1Nn1N') );
		}
	}
	if ( data && data.length !== nfcns ) {
		throw new Error( format('1Nn0k') );
	}
	// Determine whether the strided array interface includes offsets:
	if ( (narrays*3)+1 === nargs ) {
		hasOffsets = false;
	} else if ( (narrays*4)+1 === nargs ) {
		hasOffsets = true;
	} else {
		throw new Error( format('1Nn1O') );
	}
	// Determine the "stride" for accessing related arguments:
	if ( hasOffsets ) {
		strideArgs = 4;
	} else {
		strideArgs = 3;
	}
	// Compute the index of the first output strided array argument:
	iout = ( nin*strideArgs ) + 1;

	return dispatcher;

	/**
	* Strided array function interface which performs multiple dispatch.
	*
	* @private
	* @param {integer} N - number of indexed elements
	* @param {*} dtypeX - data type for `x`
	* @param {Collection} x - strided array
	* @param {integer} strideX - index increment for `x`
	* @param {...(Collection|integer|NonNegativeInteger)} args - array arguments (data types, arrays, strides, and offsets)
	* @throws {Error} insufficient arguments
	* @throws {Error} too many arguments
	* @throws {TypeError} first argument must be an integer
	* @throws {TypeError} input array strides must be integers
	* @throws {TypeError} output array strides must be integers
	* @throws {TypeError} input array offsets must be nonnegative integers
	* @throws {TypeError} output array offsets must be nonnegative integers
	* @throws {TypeError} input array arguments must be array-like objects
	* @throws {TypeError} output array arguments must be array-like objects
	* @throws {RangeError} input array arguments must have sufficient elements based on the associated stride and the number of indexed elements
	* @throws {RangeError} output array arguments must have sufficient elements based on the associated stride and the number of indexed elements
	* @throws {TypeError} unable to resolve a strided array function supporting the provided array argument data types
	* @returns {(Collection|Array<Collection>|void)} destination array(s)
	*/
	function dispatcher() {
		var strides;
		var offsets;
		var arrays;
		var dtypes;
		var shape;
		var argc;
		var idx;
		var N;
		var v;
		var f;
		var i;
		var j;

		argc = arguments.length;
		if ( argc !== nargs ) {
			if ( argc < nargs ) {
				throw new Error( format('1Nn0l') );
			}
			throw new Error( format('1Nn0m') );
		}
		N = arguments[ 0 ];
		if ( !isInteger( N ) ) {
			throw new TypeError( format( '1Nn7e', N ) );
		}
		shape = [ N ];

		// data types for both input and output strided arrays are every `strideArgs` arguments beginning from the second argument...
		dtypes = [];
		for ( i = 1; i < nargs; i += strideArgs ) {
			dtypes.push( arguments[ i ] );
		}

		// Strides for both input and output strided arrays are every `strideArgs` arguments beginning from the fourth argument...
		strides = [];
		for ( i = 3; i < nargs; i += strideArgs ) {
			v = arguments[ i ];
			if ( !isInteger( v ) ) {
				if ( i < iout ) {
					throw new TypeError( format( '1NnAH', v ) );
				} else {
					throw new TypeError( format( '1NnAI', v ) );
				}
			}
			strides.push( v );
		}
		if ( hasOffsets ) {
			// Offsets for both input and output strided arrays are every `strideArgs` arguments beginning from the fifth argument...
			offsets = [];
			for ( i = 4; i < nargs; i += strideArgs ) {
				v = arguments[ i ];
				if ( !isNonNegativeInteger( v ) ) {
					if ( i < iout ) {
						throw new TypeError( format( '1NnAG', v ) );
					} else {
						throw new TypeError( format( '1NnAE', v ) );
					}
				}
				offsets.push( v );
			}
		}
		// Input and output strided arrays are every `strideArgs` arguments beginning from the third argument...
		arrays = [];
		for ( i = 2; i < nargs; i += strideArgs ) {
			v = arguments[ i ];
			if ( !isCollection( v ) ) {
				if ( i < iout ) {
					throw new TypeError( format( '1NnDg', v ) );
				} else {
					throw new TypeError( format( '1NnDh', v ) );
				}
			}
			j = (i-2) / strideArgs;
			if ( hasOffsets ) {
				idx = offsets[ j ] + ( (N-1)*strides[j] );
				if ( N > 0 && (idx < 0 || idx >= v.length) ) {
					if ( i < iout ) {
						throw new RangeError( format('1Nn1T') );
					} else {
						throw new RangeError( format('1Nn1U') );
					}
				}
			} else if ( (N-1)*abs(strides[j]) >= v.length ) {
				if ( i < iout ) {
					throw new RangeError( format('1Nn1T') );
				} else {
					throw new RangeError( format('1Nn1U') );
				}
			}
			arrays.push( v );
		}
		// Resolve the strided array function satisfying the input array types:
		idx = indexOfTypes( nfcns, narrays, types, narrays, 1, 0, dtypes, 1, 0 ); // eslint-disable-line max-len

		// Check whether we were able to successfully resolve a strided array function:
		if ( idx < 0 ) {
			throw new TypeError( format('1Nn1L') );
		}
		// Retrieve the strided array function:
		if ( fcn ) {
			f = fcn;
		} else {
			f = fcns[ idx ];
		}
		// Evaluate the strided array function:
		if ( data ) {
			if ( hasOffsets ) {
				f( arrays, shape, strides, offsets, data[ idx ] );
			} else {
				f( arrays, shape, strides, data[ idx ] );
			}
		} else if ( hasOffsets ) {
			f( arrays, shape, strides, offsets );
		} else {
			f( arrays, shape, strides );
		}
		if ( nout === 1 ) {
			return arrays[ narrays-1 ];
		}
		if ( nout === 0 ) {
			return;
		}
		return arrays.slice( nin );
	}
}


// EXPORTS //

module.exports = dispatch;
