// No error when the code is evaluated
function testSumOctalAndDecimals() {
    var sum = 015 + // Octal number
        197 +
        142;

    console.log(sum);
}
// No error: Logs 352
testSumOctalAndDecimals();