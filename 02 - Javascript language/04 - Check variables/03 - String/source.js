var sName = 'John';
var oName = new String( 'John' );

console.log( sName === oName ); // false
console.log( sName === oName.toString() ); // true
console.log( typeof sName === 'string' );   // true
console.log( typeof oName === 'string' );   // false
console.log( typeof oName === 'object' );    // true

// See Call & Apply section for more testing.

function isString ( sValue ) {
    return Object.prototype.toString.call( sValue ) === '[object String]';
}
console.log( isString( sName ) );   // true
console.log( isString( oName ) );   // true