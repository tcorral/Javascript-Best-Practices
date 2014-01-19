var aNumbers = [];
var oNumbersArray = new Array();    // Don't use new Array neither new Object

console.log( aNumbers === oNumbersArray ); // false
console.log( aNumbers === oNumbersArray.valueOf() ); // false
console.log( aNumbers === oNumbersArray.toString() ); // false
console.log( typeof aNumbers === 'object' );   // true
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