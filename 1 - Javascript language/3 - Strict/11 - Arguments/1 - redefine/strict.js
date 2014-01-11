function testArguments()
{
  "use strict";
  arguments = 19;
  console.log(arguments.length);
}

// Throws error: "SyntaxError: Assignment to eval or arguments is not allowed in strict mode"
testArguments();