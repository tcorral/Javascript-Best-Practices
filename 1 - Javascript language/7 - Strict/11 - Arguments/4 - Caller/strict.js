function testArguments() {
    "use strict";
    testArguments.caller;
    testArguments.arguments;
    return 'test';
}

function executeTestArguments() {
    return testArguments();
}
// Throws error: "TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them"
executeTestArguments();