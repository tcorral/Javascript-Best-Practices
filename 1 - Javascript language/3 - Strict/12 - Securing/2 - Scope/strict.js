(function (){
  "use strict";
  function testScope()
  {
    return this.value = 'test';
  }

// No error.
// Logs:
// Value of this without define it: undefined
// Throws error: "TypeError: Cannot set property 'value' of undefined"
  console.log( 'Value of Window.value before execute testScope:', window.value);
  console.log( 'Value of this without define it: ', testScope().value );
  console.log( 'Value of Window.value after execute testScope:', window.value);
  console.log( 'Value of this defining it as number:', testScope.call(2).value );
  console.log( 'Value of this defining it as null:', testScope.apply(null).value );
  console.log( 'Value of this defining it as undefined:', testScope.call(undefined).value );
  console.log( 'Value of this defining it as boolean:', testScope.bind(true)().value );
  console.log( 'Value of this defining it as object:', testScope.call({}).value );
}());
