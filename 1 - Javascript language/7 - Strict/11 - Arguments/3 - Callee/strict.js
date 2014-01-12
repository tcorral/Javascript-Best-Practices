function testArguments() {
    "use strict";
    var callback = function () {
        var dummy = 'dummy';
        console.log(arguments.callee.toString());
    };

    callback();
}
// Throws error: "TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them"
testArguments();