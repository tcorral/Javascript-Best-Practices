function testEval() {
  eval = 17;
  eval('5 + 5');
}
// Throws "TypeError: number is not a function"
// eval can be redefined.
testEval();