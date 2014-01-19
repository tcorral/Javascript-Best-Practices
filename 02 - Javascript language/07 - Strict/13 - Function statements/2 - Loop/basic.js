function testFunctionStatements() {
    var indexIteration,
        iterations = 5;

    for (indexIteration = 0; indexIteration < iterations; indexIteration++) {
        function callback() {
            console.log('callback');
        };
        callback();
    }
}
// No error: Logs "callback" five times
testFunctionStatements();