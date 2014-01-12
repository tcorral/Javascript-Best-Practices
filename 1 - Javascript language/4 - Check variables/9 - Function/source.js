var test2, test3;
function test(){}
test2 = function (){};
test3 = new Function(); // Don't use new Array neither new Object neither new Function

console.log( typeof test === 'function' );   // true
console.log( typeof test2 === 'function' );   // true
console.log( typeof test3 === 'function' );   // true
console.log( typeof test === 'object' );   // true
console.log( typeof oNumbersArray === 'object' );    // true
console.log( aNumbers.constructor === Array );  // true
console.log( aNumbers instanceof Array );       // true
console.log( oNumbersArray.constructor === Array ); // true
console.log( oNumbersArray instanceof Array );  // true

// See Call & Apply section for more testing.

function isArray ( aValue ) {
    return Object.prototype.toString.call( aValue ) === '[object Array]';
}
console.log( isArray( aNumbers ) );   // true
console.log( isArray( oNumbersArray ) );   // true