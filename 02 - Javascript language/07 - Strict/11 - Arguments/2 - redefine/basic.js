function testArguments(a) {
    a = 42;
    return [a, arguments[0]];
}

// No error.
// Logs:
// pair[0] has a value of 42?  true
// pair[1] has a value of 17?  false
// overwriting the variable value change the value in arguments too.
var pair = testArguments(17);
console.log("pair[0] has a value of 42? ", pair[0] === 42);
console.log("pair[1] has a value of 17? ", pair[1] === 17);
