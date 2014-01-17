function testArguments() {
    testArguments.caller;
    testArguments.arguments;
    return 'test';
}

function executeTestArguments() {
    return testArguments();
}
// No error: Logs "test"
executeTestArguments();