function testEval()
{
  eval( "var x; delete x;" );
}
// No error
testEval();
