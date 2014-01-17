var local = 'local';

var Calendar = function (){
    // Instance properties.
};
Calendar.prototype.getDay = function (){
    // Code.
};
Calendar.prototype.setDay = function (){
    // Code.
};

var $ = function ()
{
    // Collide with jQuery alias $
};

console.log( local === window.local );
console.log( Calendar === window.Calendar );
console.log( $ === window.$ );