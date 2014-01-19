function testFunctionStatements() {
    "use strict";
    if (true) {
        function callback() {
            console.log('callback')
        }

        callback();
    }
}
// Throws error: "SyntaxError: In strict mode code, functions can only be declared at top level or immediately within another function."
testFunctionStatements();