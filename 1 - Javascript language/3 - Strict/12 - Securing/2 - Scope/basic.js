function testScope()
{
  this.value = 'test';
  return this;
}

// No error.
// Logs:
// Value of Window.value before execute testScope: undefined
// Value of this without define it: Window Object {}
// Value of Window.value after execute testScope: 'test'
    // We have added a global variable by mistake.
// Value of this defining it as number: Number {}
// Value of this defining it as null: Window Object {}
// Value of this defining it as undefined: Window Object {}
// Value of this defining it as boolean: Bind function
// Value of this defining it as object: Object {}
console.log( 'Value of Window.value before execute testScope:', window.value);
console.log( 'Value of this without define it: ', testScope().value );
console.log( 'Value of Window.value after execute testScope:', window.value);
console.log( 'Value of this defining it as number:', testScope.call(2).value );
console.log( 'Value of this defining it as null:', testScope.apply(null).value );
console.log( 'Value of this defining it as undefined:', testScope.call(undefined).value );
console.log( 'Value of this defining it as boolean:', testScope.bind(true)().value );
console.log( 'Value of this defining it as object:', testScope.call({}).value );