var sName = 'John';
var oName = new String( 'John' );

console.log( Object.prototype.toString.call(sName) === '[object String]');
console.log( Object.prototype.toString.call(oName) === '[object String]');