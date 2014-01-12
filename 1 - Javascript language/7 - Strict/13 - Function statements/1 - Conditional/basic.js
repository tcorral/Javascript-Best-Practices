function testFunctionStatements() {
    if (true) {
        function callback() {
            console.log('callback')
        }

        callback();
    }
}
// No error: Logs "callback"
testFunctionStatements();