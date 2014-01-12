var Namespace = {};

console.log( Namespace );   // {}
console.log( window.Namespace === Namespace ); // true
console.log( Namespace.local ); // undefined
console.log( Namespace.Calendar );  // undefined

(function () {
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

    // Expose the private/local variables to the namespace.
    Namespace.local = local;
    Namespace.Calendar = Calendar;
}());

console.log( local );   // ReferenceError: local is not defined.

console.log( window.local );    // undefined
console.log( Calendar );        // undefined
console.log( window.Calendar ); // undefined

console.log( Namespace.local ); // 'local'
console.log( Namespace.Calendar );  // undefined