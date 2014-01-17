var Custom, Other, oCustom, oOther;

Custom = function(){};
Custom.prototype.toString = function(){
    return '[object Custom]';
};
Other = function(){};
Other.prototype.toString = function(){
    return '[object Other]';
};

oCustom = new Custom();
oOther = new Other();

function isCustom( oValue ) {
    return Object.prototype.toString.call( oValue ) === '[object Custom]';
}
function isOther( oValue ) {
    return Object.prototype.toString.call( oValue ) === '[object Other]';
}

console.log( isCustom( oCustom ) ); // true
console.log( isOther( oOther ) );   // true