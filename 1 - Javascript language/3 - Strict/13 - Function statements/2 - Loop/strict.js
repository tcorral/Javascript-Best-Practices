function testFunctionStatements()
{
  "use strict";
  var indexIteration,
    iterations = 5;

  for(indexIteration = 0; indexIteration < iterations; indexIteration++){
    function callback(){ console.log('callback');};
    callback();
  }
}
// Throws error: "SyntaxError: In strict mode code, functions can only be declared at top level or immediately within another function."
testFunctionStatements();