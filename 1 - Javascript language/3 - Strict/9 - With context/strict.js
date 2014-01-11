// When the code is evaluated "SyntaxError: Strict mode code may not include a with statement"
function testWithUsage () {
  'use strict';
  var x = 17;
  var obj = {};
  with (obj)  // Using with x value could be the value of the obj context, of the local variables or even the global variables
  {
    console.log( x );
  }
}

// When the code is evaluated "SyntaxError: Strict mode code may not include a with statement"
function testWithUsage2 () {
  'use strict';
  var x = 17;
  var obj = { x: 19 };
  with (obj)  // Using with x value could be the value of the obj context, of the local variables or even the global variables
  {
    console.log( x );
  }
}