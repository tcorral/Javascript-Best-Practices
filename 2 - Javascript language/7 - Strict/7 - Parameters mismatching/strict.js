// When the code is evaluated throws "SyntaxError: Strict mode function may not have duplicate parameter names"
function sum(a, a, c) {
    'use strict';
    return a + b + c;
}