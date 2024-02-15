<!--

@license Apache-2.0

Copyright (c) 2022 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# map2

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a function to elements in two input arrays and assign the results to an output array.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import map2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-map2@v0.2.0-deno/mod.js';
```

You can also import the following named exports from the package:

```javascript
import { assign } from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-map2@v0.2.0-deno/mod.js';
```

<a name="fcn-map2"></a>

#### map2( x, y, fcn\[, thisArg] )

Applies a function to elements in two input arrays and assigns the results to a new array.

```javascript
import naryFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@deno/mod.js';
import add from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-add@deno/mod.js';

var x = [ 1, 2, 3, 4, 5, 6 ];
var y = [ 1, 1, 1, 1, 1, 1 ];

var out = map2( x, y, naryFunction( add, 2 ) );
// returns [ 2, 3, 4, 5, 6, 7 ]
```

The function accepts both array-like objects and [`ndarray`][@stdlib/ndarray/ctor]-like objects.

```javascript
import naryFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@deno/mod.js';
import add from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-add@deno/mod.js';
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@deno/mod.js';

var opts = {
    'dtype': 'generic'
};
var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );
var y = array( [ [ 1, 1, 1 ], [ 1, 1, 1 ] ], opts );

var out = map2( x, y, naryFunction( add, 2 ) );
// returns <ndarray>

var v = out.get( 1, 1 );
// returns 6
```

The applied function is provided the following arguments:

-   **v1**: element from first input array.
-   **v2**: element from second input array.
-   **idx**: element index.
-   **arrays**: input arrays.

To set the `this` context when invoking the input function, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
import add from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-add@deno/mod.js';

function fcn( v1, v2 ) {
    this.count += 1;
    return add( v1, v2 );
}

var x = [ 1, 2, 3, 4, 5, 6 ];
var y = [ 1, 1, 1, 1, 1, 1 ];

var ctx = {
    'count': 0
};

var out = map2( x, y, fcn, ctx );
// returns [ 2, 3, 4, 5, 6, 7 ]

var cnt = ctx.count;
// returns 6
```

<a name="method-map2-assign"></a>

#### map2.assign( x, y, out, fcn\[, thisArg] )

Applies a function to elements in two input arrays and assigns the results to an output array `out`.

```javascript
import naryFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@deno/mod.js';
import add from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-add@deno/mod.js';

var x = [ 1, 2, 3, 4, 5, 6 ];
var y = [ 1, 1, 1, 1, 1, 1 ];
var out = [ 0, 0, 0, 0, 0, 0 ];

map2.assign( x, y, out, naryFunction( add, 2 ) );

console.log( out );
// => [ 2, 3, 4, 5, 6, 7 ]
```

The method accepts both array-like objects and [`ndarray`][@stdlib/ndarray/ctor]-like objects.

```javascript
import naryFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@deno/mod.js';
import add from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-add@deno/mod.js';
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@deno/mod.js';

var opts = {
    'dtype': 'generic',
    'shape': [ 2, 3 ]
};
var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );
var y = array( [ [ 1, 1, 1 ], [ 1, 1, 1 ] ], opts );
var out = array( opts );

map2.assign( x, y, out, naryFunction( add, 2 ) );

var v = out.get( 1, 1 );
// returns 6
```

Input and output arrays must be either all array-like objects or all [`ndarray`][@stdlib/ndarray/ctor]-like objects. If input and output arrays are array-like objects, all arrays **must** have the same number of elements.

If input and output arrays are [`ndarray`][@stdlib/ndarray/ctor]-like objects, the arrays **must** be [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes]. To map from one or more input [`ndarrays`][@stdlib/ndarray/ctor] to an output [`ndarray`][@stdlib/ndarray/ctor] which has the same rank (i.e., dimensionality) and the same number of elements, but which is not [broadcast compatible][@stdlib/ndarray/base/broadcast-shapes], reshape the arrays prior to invocation.

```javascript
import naryFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@deno/mod.js';
import add from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-add@deno/mod.js';
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@deno/mod.js';

var opts = {
    'dtype': 'generic',
    'shape': [ 2, 3 ]
};
var x = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );
var y = array( [ [ 1, 1, 1 ], [ 1, 1, 1 ] ], opts );

opts = {
    'dtype': 'generic',
    'shape': [ 2, 2, 3 ]  // broadcast compatible shape
};
var out = array( opts );

map2.assign( x, y, out, naryFunction( add, 2 ) );

var v = out.get( 0, 1, 1 );
// returns 6

v = out.get( 1, 1, 1 );
// returns 6
```

In general, avoid providing output [`ndarray`][@stdlib/ndarray/ctor]-like objects which are [non-contiguous][@stdlib/ndarray/base/assert/is-contiguous] views containing one or more elements referring to the **same** memory location. Writing to an overlapping [non-contiguous][@stdlib/ndarray/base/assert/is-contiguous] view is likely to simultaneously affect multiple elements and yield unexpected results.

The applied function is provided the same arguments as with [`map2`](#fcn-map2).

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   The [`map2`](#fcn-map2) function **always** returns an output value having a "generic" data type. For example, if provided array-like objects, the function returns a generic `array`. If provided [`ndarrays`][@stdlib/ndarray/ctor], the function returns an [`ndarray`][@stdlib/ndarray/ctor] having a "generic" data type.

    Accordingly, when provided a typed array, the [`map2`](#fcn-map2) function does **not** return a typed array of the same type. To assign results to a typed array, use the [`map2.assign`](#method-map2-assign) method.

-   Both [`map2`](#fcn-map2) and [`map2.assign`](#method-map2-assign) accept array-like objects exposing getters and setters for array element access (e.g., [`Complex64Array`][@stdlib/array/complex64], [`Complex128Array`][@stdlib/array/complex128], etc).

    ```javascript
    import naryFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@deno/mod.js';
    import Complex64Array from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-complex64@deno/mod.js';
    import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@deno/mod.js';
    import realf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-realf@deno/mod.js';
    import imagf from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imagf@deno/mod.js';
    import add from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-caddf@deno/mod.js';

    var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );
    var y = new Complex64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0 ] );
    var z = new Complex64Array( 4 );

    map2.assign( x, y, z, naryFunction( add, 2 ) );

    var v = z.get( 0 );

    var re = realf( v );
    // returns 2.0

    var im = imagf( v );
    // returns 3.0
    ```

-   When applying a function to [`ndarray`][@stdlib/ndarray/ctor]-like objects, performance will be best for [`ndarray`][@stdlib/ndarray/ctor]-like objects which are single-segment contiguous. For non-contiguous arrays, see [`@stdlib/ndarray-base/binary`][@stdlib/ndarray/base/binary].

-   Both [`map2`](#fcn-map2) and [`map2.assign`](#method-map2-assign) do **not** skip `undefined` elements.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import filledarrayBy from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-filled-by@deno/mod.js';
var discreteUniform = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform' ).factory;
import naryFunction from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-nary-function@deno/mod.js';
import add from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-ops-add@deno/mod.js';
import array from 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-array@deno/mod.js';
import map2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/utils-map2@v0.2.0-deno/mod.js';

function fill( i ) {
    var rand = discreteUniform( -10*(i+1), 10*(i+1) );
    return filledarrayBy( 10, 'generic', rand );
}

// Create two-dimensional ndarrays (i.e., matrices):
var opts = {
    'dtype': 'generic',
    'flatten': true
};
var x = array( filledarrayBy( 10, opts.dtype, fill ), opts );
var y = array( filledarrayBy( 10, opts.dtype, fill ), opts );

// Create an explicit binary function:
var f = naryFunction( add, 2 );

// Compute element-wise sums...
var z = map2( x, y, f );

console.log( 'x:' );
console.log( x.data );

console.log( 'y:' );
console.log( y.data );

console.log( 'z:' );
console.log( z.data );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-map`][@stdlib/utils/map]</span><span class="delimiter">: </span><span class="description">apply a function to each element in an array and assign the result to an element in an output array.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-map2.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-map2

[test-image]: https://github.com/stdlib-js/utils-map2/actions/workflows/test.yml/badge.svg?branch=v0.2.0
[test-url]: https://github.com/stdlib-js/utils-map2/actions/workflows/test.yml?query=branch:v0.2.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-map2/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-map2?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-map2.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-map2/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-map2/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-map2/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-map2/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-map2/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-map2/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-map2/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-map2/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-map2/main/LICENSE

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/deno

[@stdlib/ndarray/base/binary]: https://github.com/stdlib-js/ndarray-base-binary/tree/deno

[@stdlib/ndarray/base/broadcast-shapes]: https://github.com/stdlib-js/ndarray-base-broadcast-shapes/tree/deno

[@stdlib/ndarray/base/assert/is-contiguous]: https://github.com/stdlib-js/ndarray-base-assert-is-contiguous/tree/deno

[@stdlib/array/complex64]: https://github.com/stdlib-js/array-complex64/tree/deno

[@stdlib/array/complex128]: https://github.com/stdlib-js/array-complex128/tree/deno

<!-- <related-links> -->

[@stdlib/utils/map]: https://github.com/stdlib-js/utils-map/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
