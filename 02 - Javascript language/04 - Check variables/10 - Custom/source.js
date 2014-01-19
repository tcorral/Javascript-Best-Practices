var Custom, Other, oCustom, oOther;

Custom = function(){};
Other = function(){};

oCustom = new Custom();
oOther = new Other();

console.log( typeof oCustom === 'object' ); // true
console.log( typeof oOther === 'object' );  // true

console.log( oCustom instanceof Custom );   // true
console.log( oCustom instanceof Object );   // true

console.log( oOther instanceof Other );     // true
console.log( oOther instanceof Object );    // true

console.log( oCustom.constructor === Custom ); // true
console.log( oCustom.constructor === Object ); // false

console.log( oOther.constructor === Other );    // true
console.log( oOther.constructor === Object );   // false
