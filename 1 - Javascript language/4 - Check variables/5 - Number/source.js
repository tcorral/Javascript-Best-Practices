var nZipCode = 29384;
var oZipCode = new Number( 29384 );

console.log( nZipCode === oZipCode ); // false
console.log( nZipCode === oZipCode.valueOf() ); // true
console.log( typeof nZipCode === 'number' );   // true
console.log( typeof oZipCode === 'number' );   // false
console.log( typeof oZipCode === 'object' );    // true

// See Call & Apply section for more testing.

function isNumber ( nValue ) {
    return Object.prototype.toString.call( nValue ) === '[object Number]';
}
console.log( isNumber( nZipCode ) );   // true
console.log( isNumber( oZipCode ) );   // true