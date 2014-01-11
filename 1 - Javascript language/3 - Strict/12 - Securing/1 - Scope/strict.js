(function (){
  "use strict";
  function testScope()
  {
    return this;
  }

// No error.
// Logs:
// Value of this without define it: undefined
// Value of this defining it as number: 2
// Value of this defining it as null: null
// Value of this defining it as undefined: undefined
// Value of this defining it as boolean: true
// Value of this defining it as object: Object {}
  console.log( 'Value of this without define it: ', testScope() );
  console.log( 'Value of this defining it as number:', testScope.call(2) );
  console.log( 'Value of this defining it as null:', testScope.apply(null) );
  console.log( 'Value of this defining it as undefined:', testScope.call(undefined) );
  console.log( 'Value of this defining it as boolean:', testScope.bind(true)() );
  console.log( 'Value of this defining it as object:', testScope.call({}) );
}());
