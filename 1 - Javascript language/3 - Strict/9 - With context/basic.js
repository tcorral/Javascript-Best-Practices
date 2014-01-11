function testWithUsage () {
  var x = 17;
  var obj = {};
  with (obj)  // Using with x value could be the value of the obj context, of the local variables or even the global variables
  {
    console.log( x );
  }
}

// No error: Logs 17
testWithUsage();

function testWithUsage2 () {
  var x = 17;
  var obj = { x: 19 };
  with (obj)  // Using with x value could be the value of the obj context, of the local variables or even the global variables
  {
    console.log( x );
  }
}
// No error: Logs 19
testWithUsage2();