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

/* eslint-disable array-element-newline */

'use strict';

// MODULES //

var tape = require( 'tape' );
var quaternary = require( '@stdlib/strided-base-quaternary' ).ndarray;
var Float64Array = require( '@stdlib/array-float64' );
var Float32Array = require( '@stdlib/array-float32' );
var Int32Array = require( '@stdlib/array-int32' );
var Uint8Array = require( '@stdlib/array-uint8' );
var dtype = require( '@stdlib/ndarray-base-buffer-dtype' );
var dispatch = require( './../lib' );


// FIXTURES //

var quaternaryClbk = require( './fixtures/quaternary.js' );
var forEach = require( './fixtures/foreach.js' );
var map1N = require( './fixtures/map1n.js' );
var fill = require( './fixtures/fill.js' );
var sum = require( './fixtures/sum.js' );


// TESTS //

tape( 'the function returns a function which throws an error if not provided an integer for the first argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];
	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			var w = new Float64Array( x.length );
			var u = new Float64Array( x.length );
			strided( value, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided an array-like object for the third argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];
	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	values = [
		'5',
		5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			var w = new Float64Array( x.length );
			var u = new Float64Array( x.length );
			strided( x.length, 'float64', value, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided an integer for the fourth argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];
	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			var w = new Float64Array( x.length );
			var u = new Float64Array( x.length );
			strided( x.length, 'float64', x, value, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided a nonnegative integer for the fifth argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];
	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			var w = new Float64Array( x.length );
			var u = new Float64Array( x.length );
			strided( y.length, 'float64', x, 1, value, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided array-like object for the seventh argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];
	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	values = [
		'5',
		5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			var w = new Float64Array( x.length );
			var u = new Float64Array( x.length );
			strided( y.length, 'float64', x, 1, 0, 'float64', value, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided an integer for the eighth argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];
	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			var w = new Float64Array( x.length );
			var u = new Float64Array( x.length );
			strided( x.length, 'float64', x, 1, 0, 'float64', y, value, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided a nonnegative integer for the ninth argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];
	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			var w = new Float64Array( x.length );
			var u = new Float64Array( x.length );
			strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, value, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided array-like object for the eleventh argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];
	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	values = [
		'5',
		5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			var w = new Float64Array( x.length );
			var u = new Float64Array( x.length );
			strided( z.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', value, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided an integer for the twelfth argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];
	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			var w = new Float64Array( x.length );
			var u = new Float64Array( x.length );
			strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, value, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided a nonnegative integer for the thirteenth argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];
	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			var w = new Float64Array( x.length );
			var u = new Float64Array( x.length );
			strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, value, 'float64', w, 1, 0, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided array-like object for the fifteenth argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];
	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	values = [
		'5',
		5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			var w = new Float64Array( x.length );
			var u = new Float64Array( x.length );
			strided( w.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', value, 1, 0, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided an integer for the sixteenth argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];
	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			var w = new Float64Array( x.length );
			var u = new Float64Array( x.length );
			strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, value, 0, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided a nonnegative integer for the seventeenth argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];
	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			var w = new Float64Array( x.length );
			var u = new Float64Array( x.length );
			strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, value, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided array-like object for the nineteenth argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];
	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	values = [
		'5',
		5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			var w = new Float64Array( x.length );
			var u = new Float64Array( x.length );
			strided( u.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', value, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided an integer for the twentieth argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];
	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	values = [
		'5',
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			var w = new Float64Array( x.length );
			var u = new Float64Array( x.length );
			strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, value, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if not provided a nonnegative integer for the twenty-first argument', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];
	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	values = [
		'5',
		-5,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		{},
		[],
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			var x = new Float64Array( 10 );
			var y = new Float64Array( x.length );
			var z = new Float64Array( x.length );
			var w = new Float64Array( x.length );
			var u = new Float64Array( x.length );
			strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, value );
		};
	}
});

tape( 'the function returns a function which throws an error if provided insufficient arguments', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var x;
	var y;
	var z;
	var w;
	var u;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];
	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( 10 );
	z = new Float64Array( 10 );
	w = new Float64Array( 10 );
	u = new Float64Array( 10 );
	values = [
		[],
		[ x.length ],
		[ x.length, 'float64' ],
		[ x.length, 'float64', x ],
		[ x.length, 'float64', x, 1 ],
		[ x.length, 'float64', x, 1, 0 ],
		[ x.length, 'float64', x, 1, 0, 'float64' ],
		[ x.length, 'float64', x, 1, 0, 'float64', y ],
		[ x.length, 'float64', x, 1, 0, 'float64', y, 1 ],
		[ x.length, 'float64', x, 1, 0, 'float64', y, 1, 0 ],
		[ x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64' ],
		[ x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z ],
		[ x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1 ],
		[ x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0 ],
		[ x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64' ],
		[ x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w ],
		[ x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1 ],
		[ x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0 ],
		[ x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64' ],
		[ x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u ],
		[ x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( wrapper( values[i] ), Error, 'throws an error when provided ' + values[ i ].length + ' arguments' );
	}
	t.end();

	function wrapper( args ) {
		return function fcn() {
			strided.apply( null, args );
		};
	}
});

tape( 'the function returns a function which throws an error if provided too many arguments', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var x;
	var y;
	var z;
	var w;
	var u;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];
	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( x.length );
	z = new Float64Array( x.length );
	w = new Float64Array( x.length );
	u = new Float64Array( x.length );
	values = [
		[ x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, 'float64', u ],
		[ x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, 'float64', u, 1 ],
		[ x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, 'float64', u, 1, 0 ],
		[ x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, 'float64', u, 1, 0, 'float64', u ],
		[ x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, 'float64', u, 1, 0, 'float64', u, 1 ],
		[ x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0, 'float64', u, 1, 0, 'float64', u, 1, 0 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( wrapper( values[i] ), Error, 'throws an error when provided ' + values[ i ].length + ' arguments' );
	}
	t.end();

	function wrapper( args ) {
		return function fcn() {
			strided.apply( null, args );
		};
	}
});

tape( 'the function returns a function which throws an error if provided an array with an insufficient number of elements (output array)', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var x;
	var y;
	var z;
	var w;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];
	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( 10 );
	z = new Float64Array( 10 );
	w = new Float64Array( 10 );
	values = [
		new Float64Array( 1 ),
		new Float64Array( 2 ),
		new Float64Array( 3 ),
		new Float64Array( 4 ),
		new Float64Array( 5 ),
		new Float64Array( 6 ),
		new Float64Array( 7 ),
		new Float64Array( 8 ),
		new Float64Array( 9 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided an array of length ' + values[ i ].length );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', value, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if provided an array with an insufficient number of elements (first input array)', function test( t ) {
	var strided;
	var values;
	var types;
	var ctx;
	var y;
	var z;
	var w;
	var u;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	ctx = {
		'sum': 0
	};
	strided = dispatch( sum( ctx ), types, null, 21, 4, 1 );

	y = new Float64Array( 10 );
	z = new Float64Array( 10 );
	w = new Float64Array( 10 );
	u = new Float64Array( 10 );
	values = [
		new Float64Array( 1 ),
		new Float64Array( 2 ),
		new Float64Array( 3 ),
		new Float64Array( 4 ),
		new Float64Array( 5 ),
		new Float64Array( 6 ),
		new Float64Array( 7 ),
		new Float64Array( 8 ),
		new Float64Array( 9 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided an array of length ' + values[ i ].length );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strided( y.length, 'float64', value, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if provided an array with an insufficient number of elements (second input array)', function test( t ) {
	var strided;
	var values;
	var types;
	var ctx;
	var x;
	var z;
	var w;
	var u;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	ctx = {
		'sum': 0
	};
	strided = dispatch( sum( ctx ), types, null, 21, 4, 1 );

	x = new Float64Array( 10 );
	z = new Float64Array( 10 );
	w = new Float64Array( 10 );
	u = new Float64Array( 10 );
	values = [
		new Float64Array( 1 ),
		new Float64Array( 2 ),
		new Float64Array( 3 ),
		new Float64Array( 4 ),
		new Float64Array( 5 ),
		new Float64Array( 6 ),
		new Float64Array( 7 ),
		new Float64Array( 8 ),
		new Float64Array( 9 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided an array of length ' + values[ i ].length );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strided( x.length, 'float64', x, 1, 0, 'float64', value, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if provided an array with an insufficient number of elements (third input array)', function test( t ) {
	var strided;
	var values;
	var types;
	var ctx;
	var x;
	var y;
	var w;
	var u;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	ctx = {
		'sum': 0
	};
	strided = dispatch( sum( ctx ), types, null, 21, 4, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( 10 );
	w = new Float64Array( 10 );
	u = new Float64Array( 10 );
	values = [
		new Float64Array( 1 ),
		new Float64Array( 2 ),
		new Float64Array( 3 ),
		new Float64Array( 4 ),
		new Float64Array( 5 ),
		new Float64Array( 6 ),
		new Float64Array( 7 ),
		new Float64Array( 8 ),
		new Float64Array( 9 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided an array of length ' + values[ i ].length );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', value, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if provided an array with an insufficient number of elements (fourth input array)', function test( t ) {
	var strided;
	var values;
	var types;
	var ctx;
	var x;
	var y;
	var z;
	var u;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	ctx = {
		'sum': 0
	};
	strided = dispatch( sum( ctx ), types, null, 21, 4, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( 10 );
	z = new Float64Array( 10 );
	u = new Float64Array( 10 );
	values = [
		new Float64Array( 1 ),
		new Float64Array( 2 ),
		new Float64Array( 3 ),
		new Float64Array( 4 ),
		new Float64Array( 5 ),
		new Float64Array( 6 ),
		new Float64Array( 7 ),
		new Float64Array( 8 ),
		new Float64Array( 9 )
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided an array of length ' + values[ i ].length );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', value, 1, 0, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if a provided positive stride is incompatible with the number of indexed elements, offset, and array length (first input array)', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var x;
	var y;
	var z;
	var w;
	var u;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];

	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( x.length );
	z = new Float64Array( x.length );
	w = new Float64Array( x.length );
	u = new Float64Array( x.length );
	values = [
		2,
		3,
		4,
		5,
		6,
		7
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided a stride length of ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strided( x.length, 'float64', x, value, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if a provided positive stride is incompatible with the number of indexed elements, offset, and array length (second input array)', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var x;
	var y;
	var z;
	var w;
	var u;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];

	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( x.length );
	z = new Float64Array( x.length );
	w = new Float64Array( x.length );
	u = new Float64Array( x.length );
	values = [
		2,
		3,
		4,
		5,
		6,
		7
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided a stride length of ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strided( x.length, 'float64', x, 1, 0, 'float64', y, value, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if a provided positive stride is incompatible with the number of indexed elements, offset, and array length (third input array)', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var x;
	var y;
	var z;
	var w;
	var u;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];

	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( x.length );
	z = new Float64Array( x.length );
	w = new Float64Array( x.length );
	u = new Float64Array( x.length );
	values = [
		2,
		3,
		4,
		5,
		6,
		7
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided a stride length of ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, value, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if a provided positive stride is incompatible with the number of indexed elements, offset, and array length (fourth input array)', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var x;
	var y;
	var z;
	var w;
	var u;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];

	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( x.length );
	z = new Float64Array( x.length );
	w = new Float64Array( x.length );
	u = new Float64Array( x.length );
	values = [
		2,
		3,
		4,
		5,
		6,
		7
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided a stride length of ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, value, 0, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if a provided positive stride is incompatible with the number of indexed elements, offset, and array length (output array)', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var x;
	var y;
	var z;
	var w;
	var u;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];
	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( x.length );
	z = new Float64Array( x.length );
	w = new Float64Array( x.length );
	u = new Float64Array( x.length );
	values = [
		2,
		3,
		4,
		5,
		6,
		7
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided a stride length of ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, value, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if a provided negative stride is incompatible with the number of indexed elements, offset, and array length (first input array)', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var x;
	var y;
	var z;
	var w;
	var u;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];

	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( x.length );
	z = new Float64Array( x.length );
	w = new Float64Array( x.length );
	u = new Float64Array( x.length );
	values = [
		-2,
		-3,
		-4,
		-5,
		-6,
		-7
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided a stride length of ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strided( x.length, 'float64', x, value, x.length-1, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if a provided negative stride is incompatible with the number of indexed elements, offset, and array length (second input array)', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var x;
	var y;
	var z;
	var w;
	var u;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];

	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( x.length );
	z = new Float64Array( x.length );
	w = new Float64Array( x.length );
	u = new Float64Array( x.length );
	values = [
		-2,
		-3,
		-4,
		-5,
		-6,
		-7
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided a stride length of ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strided( x.length, 'float64', x, 1, 0, 'float64', y, value, y.length-1, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if a provided negative stride is incompatible with the number of indexed elements, offset, and array length (third input array)', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var x;
	var y;
	var z;
	var w;
	var u;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];

	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( x.length );
	z = new Float64Array( x.length );
	w = new Float64Array( x.length );
	u = new Float64Array( x.length );
	values = [
		-2,
		-3,
		-4,
		-5,
		-6,
		-7
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided a stride length of ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, value, z.length-1, 'float64', w, 1, 0, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if a provided negative stride is incompatible with the number of indexed elements, offset, and array length (fourth input array)', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var x;
	var y;
	var z;
	var w;
	var u;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];

	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( x.length );
	z = new Float64Array( x.length );
	w = new Float64Array( x.length );
	u = new Float64Array( x.length );
	values = [
		-2,
		-3,
		-4,
		-5,
		-6,
		-7
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided a stride length of ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, value, w.length-1, 'float64', u, 1, 0 );
		};
	}
});

tape( 'the function returns a function which throws an error if a provided negative stride is incompatible with the number of indexed elements, offset, and array length (output array)', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var x;
	var y;
	var z;
	var w;
	var u;
	var i;

	types = [ 'float64', 'float64', 'float64', 'float64', 'float64' ];
	data = [ quaternaryClbk ];

	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( x.length );
	z = new Float64Array( x.length );
	w = new Float64Array( x.length );
	u = new Float64Array( x.length );
	values = [
		-2,
		-3,
		-4,
		-5,
		-6,
		-7
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), RangeError, 'throws an error when provided a stride length of ' + values[ i ] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, value, u.length-1 );
		};
	}
});

tape( 'the function returns a function which throws an error if unable to resolve a strided array function supporting the provided array argument data types', function test( t ) {
	var strided;
	var values;
	var types;
	var data;
	var x;
	var y;
	var z;
	var w;
	var i;

	types = [
		'float64', 'float64', 'float64', 'float64', 'float64',
		'float32', 'float32', 'float32', 'float32', 'float32'
	];
	data = [ quaternaryClbk, quaternaryClbk ];
	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	x = new Float64Array( 4 );
	y = new Float64Array( 4 );
	z = new Float64Array( 4 );
	w = new Float64Array( 4 );
	values = [
		new Uint8Array( 4 ),
		new Int32Array( 4 ),
		[ 0, 0, 0, 0 ]
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided an array having data type: ' + dtype( values[i] ) );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'generic', value, 1, 0 );
		};
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function; no data; only input arrays)', function test( t ) {
	var strided;
	var types;
	var ctx;
	var x;
	var y;
	var z;
	var w;
	var u;

	types = [
		'float64', 'float64', 'float64', 'float64', 'float64',
		'float32', 'float32', 'float32', 'float32', 'float32'
	];

	ctx = {
		'sum': 0
	};
	strided = dispatch( sum( ctx ), types, null, 21, 5, 0 );

	ctx.sum = 0;
	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	u = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );
	t.strictEqual( ctx.sum, 50.0, 'returns expected value' );

	ctx.sum = 5;
	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	z = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	w = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	u = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1, 0, 'float32', y, 1, 0, 'float32', z, 1, 0, 'float32', w, 1, 0, 'float32', u, 1, 0 );
	t.strictEqual( ctx.sum, 55.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function; no data; only output arrays)', function test( t ) {
	var expected;
	var strided;
	var types;
	var x;
	var y;
	var z;
	var w;
	var u;

	types = [
		'float64', 'float64', 'float64', 'float64', 'float64',
		'float32', 'float32', 'float32', 'float32', 'float32'
	];

	strided = dispatch( fill( 3.0 ), types, null, 21, 0, 5 );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( x.length );
	z = new Float64Array( x.length );
	w = new Float64Array( x.length );
	u = new Float64Array( x.length );
	strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );

	expected = new Float64Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.deepEqual( z, expected, 'returns expected value' );
	t.deepEqual( w, expected, 'returns expected value' );
	t.deepEqual( u, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( x.length );
	z = new Float32Array( x.length );
	w = new Float32Array( x.length );
	u = new Float32Array( x.length );
	strided( x.length, 'float32', x, 1, 0, 'float32', y, 1, 0, 'float32', z, 1, 0, 'float32', w, 1, 0, 'float32', u, 1, 0 );

	expected = new Float32Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.deepEqual( z, expected, 'returns expected value' );
	t.deepEqual( w, expected, 'returns expected value' );
	t.deepEqual( u, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function array; no data; only input arrays)', function test( t ) {
	var strided;
	var types;
	var fcns;
	var ctx;
	var x;
	var y;
	var z;
	var w;
	var u;

	types = [
		'float64', 'float64', 'float64', 'float64', 'float64',
		'float32', 'float32', 'float32', 'float32', 'float32'
	];

	ctx = {
		'sum': 0
	};
	fcns = [
		sum( ctx ),
		sum( ctx )
	];
	strided = dispatch( fcns, types, null, 21, 5, 0 );

	ctx.sum = 0;
	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	u = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );
	t.strictEqual( ctx.sum, 50.0, 'returns expected value' );

	ctx.sum = 5;
	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	z = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	w = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	u = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1, 0, 'float32', y, 1, 0, 'float32', z, 1, 0, 'float32', w, 1, 0, 'float32', u, 1, 0 );
	t.strictEqual( ctx.sum, 55.0, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function array; no data; only output arrays)', function test( t ) {
	var expected;
	var strided;
	var types;
	var fcns;
	var x;
	var y;
	var z;
	var w;
	var u;

	types = [
		'float64', 'float64', 'float64', 'float64', 'float64',
		'float32', 'float32', 'float32', 'float32', 'float32'
	];

	fcns = [
		fill( 3.0 ),
		fill( 4.0 )
	];
	strided = dispatch( fcns, types, null, 21, 0, 5 );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( x.length );
	z = new Float64Array( x.length );
	w = new Float64Array( x.length );
	u = new Float64Array( x.length );
	strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );

	expected = new Float64Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.deepEqual( z, expected, 'returns expected value' );
	t.deepEqual( w, expected, 'returns expected value' );
	t.deepEqual( u, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( x.length );
	z = new Float32Array( x.length );
	w = new Float32Array( x.length );
	u = new Float32Array( x.length );
	strided( x.length, 'float32', x, 1, 0, 'float32', y, 1, 0, 'float32', z, 1, 0, 'float32', w, 1, 0, 'float32', u, 1, 0 );

	expected = new Float32Array( [ 4.0, 4.0, 4.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.deepEqual( z, expected, 'returns expected value' );
	t.deepEqual( w, expected, 'returns expected value' );
	t.deepEqual( u, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function; data; only input arrays)', function test( t ) {
	var expected;
	var strided;
	var types;
	var data;
	var cnt;
	var x;
	var y;
	var z;
	var w;
	var u;

	types = [
		'float64', 'float64', 'float64', 'float64', 'float64',
		'float32', 'float32', 'float32', 'float32', 'float32'
	];
	data = [
		clbk,
		clbk
	];

	strided = dispatch( forEach, types, data, 21, 5, 0 );
	cnt = 0;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	u = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.deepEqual( z, expected, 'returns expected value' );
	t.deepEqual( w, expected, 'returns expected value' );
	t.deepEqual( u, expected, 'returns expected value' );
	t.strictEqual( cnt, 4, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	z = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	w = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	u = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1, 0, 'float32', y, 1, 0, 'float32', z, 1, 0, 'float32', w, 1, 0, 'float32', u, 1, 0 );

	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.deepEqual( z, expected, 'returns expected value' );
	t.deepEqual( w, expected, 'returns expected value' );
	t.deepEqual( u, expected, 'returns expected value' );
	t.strictEqual( cnt, 8, 'returns expected value' );

	t.end();

	function clbk() {
		cnt += 1;
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function; data; only output arrays)', function test( t ) {
	var expected;
	var strided;
	var types;
	var data;
	var x;
	var y;
	var z;
	var w;
	var u;

	types = [
		'float64', 'float64', 'float64', 'float64', 'float64',
		'float32', 'float32', 'float32', 'float32', 'float32'
	];
	data = [
		three,
		four
	];

	strided = dispatch( map1N, types, data, 21, 0, 5 );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	u = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );

	expected = new Float64Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.deepEqual( z, expected, 'returns expected value' );
	t.deepEqual( w, expected, 'returns expected value' );
	t.deepEqual( u, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	z = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	w = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	u = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1, 0, 'float32', y, 1, 0, 'float32', z, 1, 0, 'float32', w, 1, 0, 'float32', u, 1, 0 );

	expected = new Float32Array( [ 4.0, 4.0, 4.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.deepEqual( z, expected, 'returns expected value' );
	t.deepEqual( w, expected, 'returns expected value' );
	t.deepEqual( u, expected, 'returns expected value' );

	t.end();

	function three() {
		return 3.0;
	}

	function four() {
		return 4.0;
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function; data; input and output arrays)', function test( t ) {
	var expected;
	var strided;
	var types;
	var data;
	var x;
	var y;
	var z;
	var w;
	var u;

	types = [
		'float64', 'float64', 'float64', 'float64', 'float64',
		'float32', 'float32', 'float32', 'float32', 'float32'
	];
	data = [
		quaternaryClbk,
		quaternaryClbk
	];

	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	u = new Float64Array( x.length );
	strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.deepEqual( z, expected, 'returns expected value' );
	t.deepEqual( w, expected, 'returns expected value' );

	expected = new Float64Array( [ 4.0, 8.0, 12.0, 16.0 ] );
	t.deepEqual( u, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	z = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	w = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	u = new Float32Array( x.length );
	strided( x.length, 'float32', x, 1, 0, 'float32', y, 1, 0, 'float32', z, 1, 0, 'float32', w, 1, 0, 'float32', u, 1, 0 );

	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.deepEqual( z, expected, 'returns expected value' );
	t.deepEqual( w, expected, 'returns expected value' );

	expected = new Float32Array( [ 4.0, 8.0, 12.0, 16.0 ] );
	t.deepEqual( u, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function array; data; only input arrays)', function test( t ) {
	var expected;
	var strided;
	var types;
	var data;
	var fcns;
	var cnt;
	var x;
	var y;
	var z;
	var w;
	var u;

	types = [
		'float64', 'float64', 'float64', 'float64', 'float64',
		'float32', 'float32', 'float32', 'float32', 'float32'
	];
	data = [
		clbk,
		clbk
	];
	fcns = [
		forEach,
		forEach
	];
	strided = dispatch( fcns, types, data, 21, 5, 0 );
	cnt = 0;

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	u = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.deepEqual( z, expected, 'returns expected value' );
	t.deepEqual( w, expected, 'returns expected value' );
	t.deepEqual( u, expected, 'returns expected value' );
	t.strictEqual( cnt, 4, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	z = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	w = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	u = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1, 0, 'float32', y, 1, 0, 'float32', z, 1, 0, 'float32', w, 1, 0, 'float32', u, 1, 0 );

	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.deepEqual( z, expected, 'returns expected value' );
	t.deepEqual( w, expected, 'returns expected value' );
	t.deepEqual( u, expected, 'returns expected value' );
	t.strictEqual( cnt, 8, 'returns expected value' );

	t.end();

	function clbk() {
		cnt += 1;
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function array; data; only output arrays)', function test( t ) {
	var expected;
	var strided;
	var types;
	var data;
	var fcns;
	var x;
	var y;
	var z;
	var w;
	var u;

	types = [
		'float64', 'float64', 'float64', 'float64', 'float64',
		'float32', 'float32', 'float32', 'float32', 'float32'
	];
	data = [
		three,
		four
	];
	fcns = [
		map1N,
		map1N
	];
	strided = dispatch( fcns, types, data, 21, 0, 5 );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	u = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );

	expected = new Float64Array( [ 3.0, 3.0, 3.0, 3.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.deepEqual( z, expected, 'returns expected value' );
	t.deepEqual( w, expected, 'returns expected value' );
	t.deepEqual( u, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	z = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	w = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	u = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	strided( x.length, 'float32', x, 1, 0, 'float32', y, 1, 0, 'float32', z, 1, 0, 'float32', w, 1, 0, 'float32', u, 1, 0 );

	expected = new Float32Array( [ 4.0, 4.0, 4.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.deepEqual( z, expected, 'returns expected value' );
	t.deepEqual( w, expected, 'returns expected value' );
	t.deepEqual( u, expected, 'returns expected value' );

	t.end();

	function three() {
		return 3.0;
	}

	function four() {
		return 4.0;
	}
});

tape( 'the function returns a function which invokes a callback for indexed strided array elements (function array; data; input and output arrays)', function test( t ) {
	var expected;
	var strided;
	var types;
	var data;
	var fcns;
	var x;
	var y;
	var z;
	var w;
	var u;

	types = [
		'float64', 'float64', 'float64', 'float64', 'float64',
		'float32', 'float32', 'float32', 'float32', 'float32'
	];
	data = [
		quaternaryClbk,
		quaternaryClbk
	];
	fcns = [
		quaternary,
		quaternary
	];
	strided = dispatch( fcns, types, data, 21, 4, 1 );

	x = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	z = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	w = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	u = new Float64Array( x.length );
	strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );

	expected = new Float64Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.deepEqual( z, expected, 'returns expected value' );
	t.deepEqual( w, expected, 'returns expected value' );

	expected = new Float64Array( [ 4.0, 8.0, 12.0, 16.0 ] );
	t.deepEqual( u, expected, 'returns expected value' );

	x = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	y = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	z = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	w = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	u = new Float32Array( x.length );
	strided( x.length, 'float32', x, 1, 0, 'float32', y, 1, 0, 'float32', z, 1, 0, 'float32', w, 1, 0, 'float32', u, 1, 0 );

	expected = new Float32Array( [ 1.0, 2.0, 3.0, 4.0 ] );
	t.deepEqual( x, expected, 'returns expected value' );
	t.deepEqual( y, expected, 'returns expected value' );
	t.deepEqual( z, expected, 'returns expected value' );
	t.deepEqual( w, expected, 'returns expected value' );

	expected = new Float32Array( [ 4.0, 8.0, 12.0, 16.0 ] );
	t.deepEqual( u, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a function which returns one or more output arrays, if one or more output arrays is specified, and otherwise returns `undefined`', function test( t ) {
	var strided;
	var types;
	var data;
	var out;
	var ctx;
	var x;
	var y;
	var z;
	var w;
	var u;

	types = [
		'float64', 'float64', 'float64', 'float64', 'float64',
		'float32', 'float32', 'float32', 'float32', 'float32'
	];

	// No output arrays...
	ctx = {
		'sum': 0
	};
	strided = dispatch( sum( ctx ), types, null, 21, 5, 0 );

	x = new Float64Array( 10 );
	y = new Float64Array( x.length );
	z = new Float64Array( x.length );
	w = new Float64Array( x.length );
	u = new Float64Array( x.length );
	out = strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );
	t.strictEqual( out, void 0, 'returns expected value' );

	// One output array...
	data = [
		quaternaryClbk,
		quaternaryClbk
	];
	strided = dispatch( quaternary, types, data, 21, 4, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( x.length );
	z = new Float64Array( x.length );
	w = new Float64Array( x.length );
	u = new Float64Array( x.length );
	out = strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );
	t.strictEqual( out, u, 'returns expected value' );

	strided = dispatch( fill( 3.0 ), types, null, 21, 4, 1 );

	x = new Float64Array( 10 );
	y = new Float64Array( x.length );
	z = new Float64Array( x.length );
	w = new Float64Array( x.length );
	u = new Float64Array( x.length );
	out = strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );
	t.strictEqual( out, u, 'returns expected value' );

	// Two or more output arrays...
	strided = dispatch( fill( 3.0 ), types, null, 21, 0, 5 );

	x = new Float64Array( 10 );
	y = new Float64Array( x.length );
	z = new Float64Array( x.length );
	w = new Float64Array( x.length );
	u = new Float64Array( x.length );
	out = strided( x.length, 'float64', x, 1, 0, 'float64', y, 1, 0, 'float64', z, 1, 0, 'float64', w, 1, 0, 'float64', u, 1, 0 );
	t.strictEqual( out.length, 5, 'returns expected value' );
	t.strictEqual( out[ 0 ], x, 'returns expected value' );
	t.strictEqual( out[ 1 ], y, 'returns expected value' );
	t.strictEqual( out[ 2 ], z, 'returns expected value' );
	t.strictEqual( out[ 3 ], w, 'returns expected value' );
	t.strictEqual( out[ 4 ], u, 'returns expected value' );

	t.end();
});
