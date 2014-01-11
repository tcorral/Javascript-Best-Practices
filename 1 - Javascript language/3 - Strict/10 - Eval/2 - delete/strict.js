function testEval()
{
  "use strict";
  eval( "var x; delete x;");
}
// Throws error "SyntaxError: Delete of an unqualified identifier in strict mode."
testEval();