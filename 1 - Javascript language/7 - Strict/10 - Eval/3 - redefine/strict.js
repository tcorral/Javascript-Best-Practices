function testEval() {
    "use strict";
    eval = 17;
    eval('5 + 5');
}
// Throws "SyntaxError: Assignment to eval or arguments is not allowed in strict mode"
testEval();