// No error when the code is evaluated.
function sum(a, a, c) {
    return a + b + c;
}
// When the code is executed throws "ReferenceError: b is not defined"
sum(1, 2, 3);