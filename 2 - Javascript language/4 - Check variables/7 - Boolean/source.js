var bBoolean = true;
var oBoolean = new Boolean( true );

console.log( bBoolean === oBoolean ); // false
console.log( bBoolean === oBoolean.valueOf() ); // true
console.log( typeof bBoolean === 'boolean' );   // true
console.log( typeof oBoolean === 'boolean' );   // false
console.log( typeof oBoolean === 'object' );    // true

// See Call & Apply section for more testing.

function isBoolean ( nValue ) {
    return Object.prototype.toString.call( nValue ) === '[object Boolean]';
}
console.log( isNumber( nZipCode ) );   // true
console.log( isNumber( oZipCode ) );   // true